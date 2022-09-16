package integrativeproject.homeSpot.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.Set;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data

public class ProductDTO {

    private Integer id;

    private String name;

    private String description;

    private CategoryDTO category;

    private CityDTO city;

    private FeatureDTO features;

    private Set<ImageDTO> images;

    private PolicyDTO policy;

    private String address;

    private Set<BookingDTO> booking;

    private Double price;

    private Double discount;


}
