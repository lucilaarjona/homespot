package com.dh.homeSpot.service;

import com.dh.homeSpot.model.dto.ProductDTO;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.Set;

public interface IProductService extends ICRUDService<ProductDTO>{

    Set<ProductDTO> findProductByCategory(String category);

    Set<ProductDTO> findProductByCity(String city, String state, String country);


    Set<ProductDTO> getProductsRandom();

}
