package integrativeproject.homeSpot.controller;


import integrativeproject.homeSpot.service.impl.BookingService;
import integrativeproject.homeSpot.model.dto.BookingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.Set;
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping()
    public ResponseEntity<?> bookingCreate(@RequestBody BookingDTO bookingDTO) throws MessagingException, UnsupportedEncodingException {
        bookingService.create(bookingDTO);

        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping()
    public ResponseEntity<?> bookingUpdate(@RequestBody BookingDTO bookingDTO) {
        bookingService.update(bookingDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<?> findBooking(){
        Set<BookingDTO> aDTO = bookingService.findAll();
        if (aDTO.size() > 0)
            return ResponseEntity.ok(aDTO);
        return ResponseEntity.badRequest().body("No verified Bookings");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findBookingById(@PathVariable("id") Integer id) {
        BookingDTO aDTO = bookingService.findById(id);
        /*In case of verification required to booking*/
        /*if (aDTO.isEnabled())*/
            return ResponseEntity.ok(aDTO);
       /* return ResponseEntity.badRequest().body("Booking unverified");*/
    }
    @GetMapping("/byProduct/{id}")
    public ResponseEntity<?> findBookingByProduct(@PathVariable("id") Integer id) {
        Set<BookingDTO> aDTO = bookingService.findBookingByProduct(id);
        if (aDTO.size() > 0)
            return ResponseEntity.ok(aDTO);
        return ResponseEntity.badRequest().body("No verified Bookings");

    }
    @GetMapping("/username/{username}")
    public ResponseEntity<?> findByUser(@PathVariable("username")String username) {
        Set<BookingDTO> aDTO = bookingService.findBookingByUser(username);
        if (aDTO.size() > 0)
            return ResponseEntity.ok(aDTO);
        return ResponseEntity.badRequest().body("No verified Bookings");
    }

    @GetMapping("/userId/{id}")
    public ResponseEntity<?> findByUserId(@PathVariable("id") Integer id) {
        Set<BookingDTO> aDTO = bookingService.findBookingByUserId(id);
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





