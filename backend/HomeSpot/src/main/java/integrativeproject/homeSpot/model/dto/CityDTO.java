package integrativeproject.homeSpot.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CityDTO {

    private Integer id;

    private String name;

    private String state;

    private String country;
}
