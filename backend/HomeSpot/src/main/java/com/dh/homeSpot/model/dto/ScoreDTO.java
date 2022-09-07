package com.dh.homeSpot.model.dto;

import com.dh.homeSpot.model.entities.security.User;
import lombok.Data;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Data
public class ScoreDTO {

    private Integer id;
    @Max(value =5)
    @Min(value = 0)
    private Integer score;
    private User user;
    //private boolean favorite;

}
