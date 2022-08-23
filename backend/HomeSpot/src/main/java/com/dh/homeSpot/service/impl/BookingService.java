package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.BookingDTO;
import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.model.entities.Booking;
import com.dh.homeSpot.model.entities.Product;
import com.dh.homeSpot.repository.IBookingRepository;
import com.dh.homeSpot.service.IBookingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookingService implements IBookingService {

    @Autowired
    ProductService productService;
    @Autowired
    private IBookingRepository bookingRepository;
    @Autowired
    ObjectMapper objectMapper;

    @Override

    public BookingDTO findById(Integer id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        BookingDTO bookingDTO = null;
        if (booking.isPresent())
            bookingDTO = objectMapper.convertValue(booking, BookingDTO.class);
        return bookingDTO;
    }

    @Override
    public BookingDTO create(BookingDTO bookingDTO) {
        ProductDTO product = productService.findById(bookingDTO.getProduct().getId());
        Booking booking = objectMapper.convertValue(bookingDTO, Booking.class);
        booking.setProduct(objectMapper.convertValue(product, Product.class));
        bookingRepository.save(booking);
        return bookingDTO;
    }

    @Override
    public void deleteById(Integer id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public BookingDTO update(BookingDTO bookingDTO) {
        Booking booking = objectMapper.convertValue(bookingDTO, Booking.class);
        bookingRepository.save(booking);
        return bookingDTO;
    }

    @Override
    public Set<BookingDTO> findAll() {
        List<Booking> bookingList = bookingRepository.findAll();
        Set<BookingDTO> bookingDTOS = new HashSet<>();
        for (Booking booking : bookingList) {
            bookingDTOS.add(objectMapper.convertValue(booking, BookingDTO.class));
        }
        return bookingDTOS;
    }

    @Override
    public Set<BookingDTO> findBookingByProduct(Integer product_id) {
        Set<Booking> bookingSet = bookingRepository.findBookingByProduct(product_id);
        Set<BookingDTO> bookingDTOSet = new HashSet<>();
        if (bookingSet.size() > 0) {
            for (BookingDTO bookingDTO : bookingDTOSet)
                bookingDTOSet.add(objectMapper.convertValue(bookingDTO, BookingDTO.class));
        }
        return bookingDTOSet;
    }
}
