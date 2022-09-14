package com.dh.homeSpot.model.dto;

import com.dh.homeSpot.model.entities.*;
import lombok.Data;

import javax.persistence.Column;
import java.util.List;
import java.util.Set;

@Data

public class ProductDTO {

    private Integer id;
    private String name;
    private String description;
    private CategoryDTO category;
    private Set<Image> images;
    private CityDTO city;
    private FeatureDTO features;
    private PolicyDTO policy;
    private Set<Booking> booking;
    private String address;
    private Double latitude;
    private Double longitude;
    private Set<Score> scores;

}
