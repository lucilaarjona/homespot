package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
  @Query(value = "SELECT * FROM products ORDER BY id", nativeQuery = true)
  List<Product> getProductsRandom();

  }
