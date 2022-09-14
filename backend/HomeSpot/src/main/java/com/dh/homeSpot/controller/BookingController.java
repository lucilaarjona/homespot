package com.dh.homeSpot.controller;

import com.dh.homeSpot.model.dto.BookingDTO;
import com.dh.homeSpot.service.impl.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/booking")

public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping
    public ResponseEntity<?> bookingCreate(@RequestBody BookingDTO bookingDTO) {
        bookingService.create(bookingDTO);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> bookingUpdate( @RequestBody BookingDTO bookingDTO) {
        bookingService.update(bookingDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> findBookings(){
        Set<BookingDTO> bookedDTO = bookingService.findAll();
        if (bookedDTO.size() > 0)
            return ResponseEntity.ok(bookedDTO);
        return ResponseEntity.badRequest().body("No verified Bookings");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findBookingById(@PathVariable("id") Integer id) {
        BookingDTO aDTO = bookingService.findById(id);
        return ResponseEntity.ok(aDTO);
    }

    @GetMapping("/findByProduct/{id}")
    public ResponseEntity<?> findBookingByProduct(@PathVariable("id") Integer id) {
        Set<BookingDTO> aDTO = bookingService.findBookingByProduct(id);
        if (aDTO.size() > 0)
            return ResponseEntity.ok(aDTO);
        return ResponseEntity.badRequest().body("No verified Bookings");

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> bookingDelete(@PathVariable("id") Integer id) {
        bookingService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}