package integrativeproject.homeSpot.model.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "images")

public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private String url;

}
