package com.dh.homeSpot.model.dto;

import lombok.Data;

@Data
public class FeatureDTO {
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
