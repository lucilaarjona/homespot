package com.dh.homeSpot.model.dto;

import com.dh.homeSpot.model.entities.security.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Date;
import java.sql.Time;

@Data

public class BookingDTO {

    private Integer id;
    private Date startDate;
    private Date endDate;
    private ProductDTO product;
    private User user;

}
