package com.dh.homeSpot.model.dto;

import com.dh.homeSpot.model.entities.*;
import lombok.Data;

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
    private List<Feature> features;
    private PolicyDTO policy;
    private Booking booking;

}
