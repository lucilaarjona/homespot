package com.dh.homeSpot.model.entities;

import com.dh.homeSpot.model.entities.security.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    //private boolean favorite;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = {"score"})
    private User user;

}
