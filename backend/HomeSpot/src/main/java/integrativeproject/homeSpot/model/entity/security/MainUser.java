package integrativeproject.homeSpot.model.entity.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MainUser implements UserDetails {

    private Integer id;
    private String name;
    private String lastame;
    private String username;
    private String email;
    private String password;
    private String city;

    private Collection<? extends GrantedAuthority> authorities;

    public MainUser(Integer id, String name, String lastame, String username, String email, String password, String city, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.name = name;
        this.lastame = lastame;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.authorities = authorities;
    }

    public MainUser(String name, String lastame, String username, String email, String password, String city, Collection<? extends GrantedAuthority> authorities) {
        this.name = name;
        this.lastame = lastame;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.authorities = authorities;
    }

    public static MainUser build(User user) {
        List<GrantedAuthority> authoritiesU = new ArrayList<>();
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole().getRoleName().name());
        authoritiesU.add(authority);
        return new MainUser(user.getId(),user.getName(), user.getLastame(), user.getUsername(), user.getEmail(),
                user.getPassword(), user.getCity(), authoritiesU);
    }

    //los que tengan la anotación @Override son métodos de UserDetails de SpringSecurity

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastame() {
        return lastame;
    }

    public void setLastame(String lastame) {
        this.lastame = lastame;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}


