package com.dh.homeSpot.Security.entity;

import com.dh.homeSpot.model.entities.Score;
import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.IgnoreForBinding;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String lastName;
    private String email;
    private String password;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private Set<Score> scores;
}
