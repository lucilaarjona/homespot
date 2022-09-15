package integrativeproject.homeSpot.model.entity;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "policies")
@Data


public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String norms  ;

    private String HealthAndSecurity ;

    private String cancellationPolicy ;


}
