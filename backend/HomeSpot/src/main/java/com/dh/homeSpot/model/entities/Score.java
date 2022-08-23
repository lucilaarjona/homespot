package com.dh.homeSpot.model.entities;

import com.dh.homeSpot.Security.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "scores")

public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"score"})
    @JoinColumn(name = "fk_product")
    private Product product;
    private Integer score;
    private boolean favorite;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"score"})
    private User user;

}
