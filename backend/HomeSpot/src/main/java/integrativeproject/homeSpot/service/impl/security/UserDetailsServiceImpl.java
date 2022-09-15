package integrativeproject.homeSpot.service.impl.security;

import integrativeproject.homeSpot.model.entity.security.MainUser;
import integrativeproject.homeSpot.model.entity.security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import javax.transaction.Transactional;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String Username) throws UsernameNotFoundException {
        User user = userService.getByUser(Username);
        return MainUser.build(user);
    }
}
