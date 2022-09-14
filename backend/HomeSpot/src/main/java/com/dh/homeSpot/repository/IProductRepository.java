package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.sql.Date;
import java.util.List;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
  //Set<ProductDTO> getRandomProducts();
  }
