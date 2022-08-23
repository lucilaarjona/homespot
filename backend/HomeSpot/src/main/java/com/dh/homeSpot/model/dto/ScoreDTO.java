package com.dh.homeSpot.model.dto;

import lombok.Data;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Data
public class ScoreDTO {

    private Integer id;
    @Max(value =5)
    @Min(value = 1)
    private Integer score;
    private boolean favorite;

}
