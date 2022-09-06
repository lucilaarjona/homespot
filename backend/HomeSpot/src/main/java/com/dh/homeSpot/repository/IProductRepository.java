package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.sql.Date;
import java.util.Set;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
  //Set<ProductDTO> getRandomProducts();

    //método que nos permita filtrar productos por ciudad y dos fechas

    @Query(value = "SELECT * FROM Cities c LEFT JOIN Products p on c.id=p.cities_id LEFT JOIN Bookings b on p.id=b.products_id WHERE c.name= :city AND (not ( b.start_date = :startDate  and  b.end_date = :endDate  ) OR b.products_id IS NULL);", nativeQuery = true)
    Set<Product> findProductByCityAndDate(@Param("city") String city, @Param("startDate") Date startDate, @Param("endDate") Date endDate);
}

