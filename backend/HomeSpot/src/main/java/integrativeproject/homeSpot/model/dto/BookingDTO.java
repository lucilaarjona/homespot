package integrativeproject.homeSpot.model.dto;

import integrativeproject.homeSpot.model.entity.security.User;
import lombok.Data;

import java.sql.Date;

@Data
public class BookingDTO {

    private Integer id;

    private Date bookingStartDate;

    private Date bookingEndDate;

    private ProductDTO product;

    private User user;


  }
