package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.Set;

@Repository

public interface IProductRepository extends JpaRepository<Product,Integer> {
  /*  Optional<Product> findProductByNameIdentifier(String name);
    @Query("SELECT p FROM Product p LEFT JOIN Booking b on p.id=b.product.id WHERE  (not (b.bookingStartDate = :startDate  and  b.bookingEndDate = :endDate) OR b.product.id IS NULL)")
    Set<Product> findProductByDate( @Param("startDate") Date startDate, @Param("endDate") Date endDate);
*/
    @Query("SELECT p FROM City c LEFT JOIN Product p on c.id=p.city.id LEFT JOIN Booking b on p.id=b.product.id WHERE c.name= :city AND (not ( b.bookingStartDate = :startDate  and  b.bookingEndDate = :endDate) OR b.product.id IS NULL)")
    Set<Product> findProductByCityAndDate(@Param("city") String city, @Param("startDate") Date startDate, @Param("endDate") Date endDate);


}
