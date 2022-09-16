package integrativeproject.homeSpot.model.entity;

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

    private String name;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @EqualsAndHashCode.Exclude @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @EqualsAndHashCode.Exclude @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "products_id", nullable = false , referencedColumnName = "id")
    private Set<Image> images;

    @EqualsAndHashCode.Exclude @ToString.Exclude
    @ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "cities_id",referencedColumnName = "id", nullable = false)
    private City city;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "features_id", referencedColumnName = "id", nullable = false)
    private Feature features;

    @EqualsAndHashCode.Exclude @ToString.Exclude
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "policies_id", referencedColumnName = "id")
    private Policy policy;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private Set<Booking> booking;

    private String address;

    private Double price;

    private Double discount;


}
