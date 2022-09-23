package integrativeproject.homeSpot.model.dto.security;

import com.sun.istack.NotNull;
import integrativeproject.homeSpot.model.entity.security.Role;
import lombok.Data;

import javax.persistence.*;

@Data

public class UserDTO {

    private Integer id;

    private String name;

    private String lastame;

    private String username;

    private String email;

    private String password;

    private String city;


    public UserDTO() {
    }

    public UserDTO(Integer id) {
        this.id = id;
    }

    public UserDTO(String name, String lastame, String username, String email, String password, String city) {
        this.name = name;
        this.lastame = lastame;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;


    }

}
