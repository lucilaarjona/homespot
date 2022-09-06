package com.dh.homeSpot.model.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "features")

public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean pool;
    private boolean grill;
    private boolean AC;
    private boolean gym;
    private boolean laundry;
    private boolean heating;
    private boolean pets;
    private boolean wifi;


}
