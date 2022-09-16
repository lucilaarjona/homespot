package integrativeproject.homeSpot.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImageDTO {

    private Integer id;

    private String title;

    private String url;
}
