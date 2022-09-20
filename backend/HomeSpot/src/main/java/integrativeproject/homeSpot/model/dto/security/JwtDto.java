package integrativeproject.homeSpot.model.dto.security;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter @Setter
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
}
