package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Integer> {

    Set<Booking> findBookingByProduct(Integer product_id);

}
