package com.dh.homeSpot.security;

import com.dh.homeSpot.security.jwt.JwtEntryPoint;
import com.dh.homeSpot.security.jwt.JwtTokenFilter;
import com.dh.homeSpot.service.impl.security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
/*@EnableGlobalMethodSecurity(prePostEnabled = true)*/
public class MainSecurity extends WebSecurityConfigurerAdapter{
    @Autowired
    UserDetailsServiceImpl userDetailsService;

    //Devuelve el mensaje de no autorizado
    @Autowired
    JwtEntryPoint jwtEntryPoint;

    @Bean
    public JwtTokenFilter jwtTokenFilter() {
        return new JwtTokenFilter();
    }

    /**
     * Encripta el pasword
     *
     * @return pasword ecriptado
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /*@Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }*/
    @Bean("authenticationManager")
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors(); //cors origin resource sha
        http.csrf().disable(); //cors side request forgery
                http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/auth/**", "/user/**").permitAll()
                .antMatchers(HttpMethod.GET, "/product/**", "/category/**","/city/**","/feature/**","/policy/**","/score/**").permitAll()
                .antMatchers(HttpMethod.POST, "/product/**", "/category/**", "/city/**", "/feature/**", "/policy/**").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, /*"/product/**",*/ "/category/**","/city/**","/feature/**", "/policy/**", "/auth/**", "/user/**").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/**", "/category/**", "/city/**", "/feature/**", "/policy/**", "/auth/**", "/user/**").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/auth/**", "/user/**").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/booking/**"/*"/auth/**"*/).hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/booking/**").hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/booking/**").hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.GET, "/booking/**").hasAnyRole("USER", "ADMIN")

                //.anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);


        /*http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/auth/**", "/booking/**").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/**").permitAll()
                .and()
                .authorizeRequests().antMatchers("/booking/**", "/users/**").hasAnyAuthority("ADMIN", "USER")
                .and()
                .authorizeRequests().antMatchers("/**").hasAuthority("ADMIN")
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);*/
    }
}

//    @Bean
//    CorsConfigurationSource corsConfigurationSource()
//    {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("/**"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

