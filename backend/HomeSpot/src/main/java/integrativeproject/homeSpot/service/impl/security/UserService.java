package integrativeproject.homeSpot.service.impl.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.model.dto.ProductDTO;
import integrativeproject.homeSpot.model.dto.security.UserDTO;
import integrativeproject.homeSpot.model.entity.Product;
import integrativeproject.homeSpot.model.entity.security.Role;
import integrativeproject.homeSpot.model.entity.security.User;
import integrativeproject.homeSpot.repository.security.UserRepository;
import integrativeproject.homeSpot.service.impl.ProductService;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;
import java.util.Set;

import static integrativeproject.homeSpot.security.enums.RoleName.ADMIN;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductService productService;

    @Autowired
    ObjectMapper objectMapper;

    public User getByUser(String username) {
        return userRepository.findByUsername(username);
    }

    public Boolean isAdmin(String username) {
        Role role = getByUser(username).getRole();
        Boolean admin = false;
        //for (Role role : roleSet)
        if (role.getRoleName() == ADMIN)
            admin = true;
        return admin;
    }

    public User getById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public Boolean existsByUser(String username) {

        return userRepository.existsByUsername(username);
    }

    public Boolean existsByEmail(String email) {

        return userRepository.existsByEmail(email);
    }


    public void save(User user) throws UnsupportedEncodingException, MessagingException {

        userRepository.save(user);

    }

    public UserDTO update(UserDTO userDTO) {
        User user = objectMapper.convertValue(userDTO, User.class);
        userRepository.save(user);
        return userDTO;
    }
}
