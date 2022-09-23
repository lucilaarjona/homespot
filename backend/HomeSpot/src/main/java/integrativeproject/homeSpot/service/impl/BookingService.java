package integrativeproject.homeSpot.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.model.dto.BookingDTO;
import integrativeproject.homeSpot.model.dto.ProductDTO;
import integrativeproject.homeSpot.model.entity.Booking;
import integrativeproject.homeSpot.model.entity.Product;
import integrativeproject.homeSpot.repository.IBookingRepository;
import integrativeproject.homeSpot.model.entity.security.User;
import integrativeproject.homeSpot.service.impl.security.UserService;
import integrativeproject.homeSpot.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookingService implements IBookingService {

    @Autowired
    UserService userService;

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
            /*if (booking.get().isEnabled())*/ /*In case of verification required to booking*/
            bookingDTO = objectMapper.convertValue(booking, BookingDTO.class);
        return bookingDTO;
    }

    @Override
    public BookingDTO create(BookingDTO bookingDTO) throws MessagingException, UnsupportedEncodingException {
        User user = userService.getById(bookingDTO.getUser().getId());
       ProductDTO product = productService.findById(bookingDTO.getProduct().getId());
         /*ProductDTO productDTO = productService.findById(bookingDTO.getProduct().getId());
        bookingDTO.setProduct(productDTO);*/
        Booking booking = objectMapper.convertValue(bookingDTO, Booking.class);
        booking.setUser(user);
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
        List<Booking> bookingS = bookingRepository.findAll();
        Set<BookingDTO> bookingSDTO = new HashSet<>();
        for (Booking booking : bookingS) {
            /*if (booking.isEnabled()) *//*In case of verification required to booking*/
            bookingSDTO.add(objectMapper.convertValue(booking, BookingDTO.class));
        }
        return bookingSDTO;

    }

    @Override
    public Set<BookingDTO> findBookingByProduct(Integer product_id) {
        Set<Booking> bookingSet = bookingRepository.findBookingByProduct(product_id);
        Set<BookingDTO> bookingDTOSet = new HashSet<>();
        if (bookingSet.size() > 0) {
            for (BookingDTO bookingDTO : bookingDTOSet)
               /* if (bookingDTO.isEnabled())*/ /*In case of verification required to booking*/
                    bookingDTOSet.add(objectMapper.convertValue(bookingDTO, BookingDTO.class));
        }
        return bookingDTOSet;
    }

    @Override
    public Set<BookingDTO> findBookingByUser(String username) {
        User user = userService.getByUser(username);
        Set<Booking> bookingSet = bookingRepository.findBookingByUser(user.getUsername());
        Set<BookingDTO> bookingDTOSet = new HashSet<>();
        if (bookingSet.size() > 0) {
              for (Booking booking : bookingSet) {
                    bookingDTOSet.add(objectMapper.convertValue(booking , BookingDTO.class));
                }
          }

        return bookingDTOSet;
    }

    @Override
    public Set<BookingDTO> findBookingByUserId(Integer id) {
        List<Booking> bookingS = bookingRepository.findAll();
        Set<BookingDTO> bookingSDTO = new HashSet<>();
        for (Booking booking : bookingS) {
            if(booking.getUser().getId()== id){
                bookingSDTO.add(objectMapper.convertValue(booking, BookingDTO.class));
            }

        }
        return bookingSDTO;
    }

}



