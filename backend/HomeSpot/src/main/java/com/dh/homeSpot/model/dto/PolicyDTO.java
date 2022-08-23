package com.dh.homeSpot.model.dto;

import lombok.Data;

import java.util.ArrayList;

@Data
public class PolicyDTO {
    private Integer id;
    private ArrayList norms;
    private ArrayList healthAndSecurity;
    private ArrayList cancellationPolicy;
}
