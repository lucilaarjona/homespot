package integrativeproject.homeSpot.model.entity;

import integrativeproject.homeSpot.model.entity.security.User;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingStartDate;

    @Temporal(TemporalType.TIMESTAMP)
    private Date bookingEndDate;

    @ManyToOne
    @JoinColumn(name = "products_id", referencedColumnName = "id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

}
