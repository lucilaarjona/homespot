package com.dh.homeSpot.service;

import com.dh.homeSpot.model.dto.BookingDTO;

import java.util.Set;

public interface IBookingService extends ICRUDService<BookingDTO>{

    BookingDTO create(BookingDTO bookingDTO);

    Set<BookingDTO> findBookingByProduct(Integer product_id);

    //Set<BookingDTO> findBookingByUser(String username);
}
