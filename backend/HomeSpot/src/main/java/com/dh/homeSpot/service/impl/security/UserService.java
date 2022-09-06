package com.dh.homeSpot.service.impl.security;

import com.dh.homeSpot.model.entities.security.Role;
import com.dh.homeSpot.model.entities.security.User;
import com.dh.homeSpot.security.enums.RoleName;
import com.dh.homeSpot.repository.security.IUserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Transactional
public class UserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper objectMapper;

    public User getByUser(String username) {
        return userRepository.findByUsername(username);
    }

    public Boolean isAdmin(String username) {
        Set<Role> roleSet = getByUser(username).getRoles();
        Boolean admin = false;
        for (Role role : roleSet)
            if (role.getRoleName() == RoleName.ADMIN)
                admin = true;
        return admin;
    }

    public Boolean existsByUser(String username) {

        return userRepository.existsByUsername(username);
    }

    public Boolean existsByEmail(String email) {

        return userRepository.existsByEmail(email);
    }


    public void save(User user) {

        userRepository.save(user);
    }


    }


