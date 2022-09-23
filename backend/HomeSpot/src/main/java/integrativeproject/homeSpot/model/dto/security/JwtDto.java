package integrativeproject.homeSpot.model.dto.security;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtDto {

    private Integer id;
    private String token;
    private String bearer = "Bearer";
    private String username;
    private String name;
    private String lastname;
    private Collection<? extends GrantedAuthority> authorities;


    public JwtDto(String token, String username, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.username = username;
        this.authorities = authorities;
    }


    public JwtDto(String token, String username, String name, String lastname, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.username = username;
        this.name = name;
        this.lastname = lastname;
        this.authorities = authorities;
    }

    public JwtDto(Integer id, String token, String bearer, String username, String name, String lastname, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.token = token;
        this.bearer = bearer;
        this.username = username;
        this.name = name;
        this.lastname = lastname;
        this.authorities = authorities;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBearer() {
        return bearer;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}

