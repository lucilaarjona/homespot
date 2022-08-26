
package com.dh.homeSpot.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "images")

public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String url;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName="id", updatable = false, insertable = false)
    @JsonIgnore
    private Product product;
}
