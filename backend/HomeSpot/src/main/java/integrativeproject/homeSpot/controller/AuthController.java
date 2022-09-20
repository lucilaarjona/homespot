package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.model.dto.security.JwtDto;
import integrativeproject.homeSpot.model.dto.security.NewUser;
import integrativeproject.homeSpot.model.dto.security.UserLogin;
import integrativeproject.homeSpot.security.enums.RoleName;
import integrativeproject.homeSpot.security.jwt.JwtProvider;
import integrativeproject.homeSpot.model.dto.Message;
import integrativeproject.homeSpot.model.entity.security.Role;
import integrativeproject.homeSpot.model.entity.security.User;
import integrativeproject.homeSpot.service.impl.security.RoleService;
import integrativeproject.homeSpot.service.impl.security.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.HashSet;
import java.util.Set;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    RoleService rolService;

    @Autowired
    JwtProvider jwtProvider;

    //Espera un json y lo convierte a tipo clase NuevoUsuario
    @PostMapping("/newUser")
    public ResponseEntity<?> newUser(@Valid @RequestBody NewUser newUser, BindingResult bindingResult) throws MessagingException, UnsupportedEncodingException {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(new Message("Campos o email invalido"), HttpStatus.BAD_REQUEST);
        }
        if (userService.existsByUser(newUser.getUsername())) {
            return new ResponseEntity<>(new Message("Ese nombre de usuario ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (userService.existsByEmail(newUser.getEmail())) {
            return new ResponseEntity<>(new Message("Ese email ya existe"), HttpStatus.BAD_REQUEST);
        }

        User user = new User(newUser.getName(), newUser.getLastname(), newUser.getUsername(),
                newUser.getEmail(), passwordEncoder.encode(newUser.getPassword()), newUser.getCity());


        if (newUser.getRoles().contains("USER")) {
            user.setRole(rolService.getByRoleName(RoleName.USER).orElse(null));
        }
        if (newUser.getRoles().contains("ADMIN")) {
           user.setRole(rolService.getByRoleName(RoleName.ADMIN).orElse(null));
        }
        userService.save(user);

        return new ResponseEntity<>(new Message("Usuario creado"), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody UserLogin userLogin, BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            return new ResponseEntity(new Message("Campos inválidos"), HttpStatus.BAD_REQUEST);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userLogin.getUsername(), userLogin.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String name = userService.getByUser(userLogin.getUsername()).getName();
        String lastname = userService.getByUser(userLogin.getUsername()).getLastame();
        JwtDto jwtDto = new JwtDto(jwt, name, lastname, userDetails.getUsername(), userDetails.getAuthorities() );
        return new ResponseEntity<>(jwtDto, HttpStatus.OK);
    }

}

