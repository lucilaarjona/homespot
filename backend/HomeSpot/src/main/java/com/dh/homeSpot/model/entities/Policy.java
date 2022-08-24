
package com.dh.homeSpot.model.entities;
import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "policies")

public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String norms  ;
    private String HealthAndSecurity ;
    private String cancellationPolicy ;

}
