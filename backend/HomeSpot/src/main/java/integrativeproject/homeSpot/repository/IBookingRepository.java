package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.Booking;

import integrativeproject.homeSpot.model.entity.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
public interface IBookingRepository extends JpaRepository<Booking, Integer> {
    /*If booking asks for mail verification*/

    /*  @Query("SELECT b FROM Booking b WHERE b.verificationCode = ?1")
    Booking findByVerificationCode(String code);*/

    Set<Booking> findBookingByProduct(Integer product_id);

    Set<Booking> findBookingByUser(User user);
}
