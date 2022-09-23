package integrativeproject.homeSpot.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FeatureDTO {

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
