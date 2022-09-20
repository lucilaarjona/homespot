package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.model.dto.ProductDTO;
import integrativeproject.homeSpot.model.dto.security.UserDTO;
import integrativeproject.homeSpot.model.entity.security.User;
import integrativeproject.homeSpot.service.impl.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")

public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/isAdmin/{username}")
    public ResponseEntity<?> isAdmin(@PathVariable("username") String username){
        if(userService.isAdmin(username))
            return ResponseEntity.ok(HttpStatus.ACCEPTED);
        else
            return ResponseEntity.ok(HttpStatus.FORBIDDEN);
    }

    @PutMapping()
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO) {
        userService.update(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

