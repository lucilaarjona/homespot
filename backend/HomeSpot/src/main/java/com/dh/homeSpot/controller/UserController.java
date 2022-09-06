package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.model.entities.security.User;
import com.dh.homeSpot.repository.security.IUserRepository;
import com.dh.homeSpot.service.impl.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")

public class UserController {

    private static final Logger logger = Logger.getLogger(UserController.class);


    @Autowired
    private UserService userService;
    @Autowired
    private IUserRepository userRepository;



      @GetMapping("/isAdmin/{username}")
        public ResponseEntity<?> isAdmin(@PathVariable("username") String username) {
          if (userService.isAdmin(username))
              return ResponseEntity.ok(HttpStatus.ACCEPTED);
          else
              return ResponseEntity.ok(HttpStatus.FORBIDDEN);

      }

       /* @GetMapping("/{email}")
        public ResponseEntity<?> getUserByEmail (@PathVariable String email) {
            return new ResponseEntity<>(userService.existsByEmail(email), HttpStatus.OK);

        }*/
    }


