package com.dh.homeSpot.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {

    private Integer Id;
    private String title;
    private String description;
    private String urlImage;

}
