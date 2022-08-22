
package com.dh.homeSpot.model.entities;
import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
@Table(name = "policies")

public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private ArrayList norms;
    private ArrayList HealthAndSecurity;
    private ArrayList cancellationPolicy;

}
