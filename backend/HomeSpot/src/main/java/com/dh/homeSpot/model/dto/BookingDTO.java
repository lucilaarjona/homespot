package com.dh.homeSpot.model.dto;

import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Data
public class BookingDTO {
    private Integer id;
    private Time time;
    private Date StartDate;
    private Date endDate;
    private ProductDTO product;
    //private User user;

}
