package com.dh.homeSpot.model.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false, referencedColumnName = "id")
    private Category category;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "products_id", nullable = false, referencedColumnName = "id")
    private Set<Image> images;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "cities_id", nullable = false,  referencedColumnName = "id")
    private City city;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_features", referencedColumnName = "id")
    private Feature features;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "policies_id", referencedColumnName = "id")
    private Policy policy;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private Set<Booking> booking;

}

