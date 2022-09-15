package integrativeproject.homeSpot.model.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "features")

public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private boolean pool;

    private boolean grill;

    private boolean AC;

    private boolean gym;

    private boolean laundry;

    private boolean heating;

    private boolean pets;

    private boolean wifi;


}
