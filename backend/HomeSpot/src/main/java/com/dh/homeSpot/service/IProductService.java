package com.dh.homeSpot.service;

import com.dh.homeSpot.model.dto.ProductDTO;

import java.sql.Date;
import java.util.Set;

public interface IProductService extends ICRUDService<ProductDTO>{
    //Set<ProductDTO> getRandomProducts();

    Set<ProductDTO> findProductByCategory(String category);

    Set<ProductDTO> findProductByCityAndDate(String city, Date startDate, Date endDate);


}
