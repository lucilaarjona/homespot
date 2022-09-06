package com.dh.homeSpot.model.entities;
import com.dh.homeSpot.model.entities.security.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Time;

import javax.persistence.*;
import java.util.Date;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Table (name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id")
    private Product product;

     @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

}
