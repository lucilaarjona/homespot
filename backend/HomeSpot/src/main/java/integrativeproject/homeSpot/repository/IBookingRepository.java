package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.Booking;

import integrativeproject.homeSpot.model.entity.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
public interface IBookingRepository extends JpaRepository<Booking, Integer> {


    Set<Booking> findBookingByProduct(Integer product_id);

    //@Query(value = "SELECT b.id, b.booking_end_date, b.booking_start_date, b.products_id, b.user_id  from bookings b left join user u on b.user_id = u.id where u.username = :user", nativeQuery = true)
    Set<Booking> findBookingByUser(String username);


}
