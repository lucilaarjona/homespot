package integrativeproject.homeSpot.service;

import integrativeproject.homeSpot.model.dto.BookingDTO;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.Set;

public interface IBookingService extends ICrudService<BookingDTO>{

    BookingDTO create(BookingDTO bookingDTO) throws MessagingException, UnsupportedEncodingException;

    Set<BookingDTO> findBookingByProduct(Integer product_id);

    Set<BookingDTO> findBookingByUser(String username);

    Set<BookingDTO> findBookingByUserId(Integer id);
}
