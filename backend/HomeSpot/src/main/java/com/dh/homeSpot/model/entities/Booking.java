package com.dh.homeSpot.model.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Data
@Entity
@Table (name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Time time;
    private Date startDate;
    private Date endDate;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id")
    private Product product;

    /* @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    */
}
