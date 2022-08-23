package com.dh.homeSpot.model.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "cities")

public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String state;
    private String country;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "city")
    @JsonIgnore
    private Set<Product> productsList = new HashSet<>();
}
