package com.example.auth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.user.User;
import com.example.user.UserRepository;
import com.example.user.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    // @PostMapping("/")
    // public String registerUser(@RequestBody User user) {
    //     user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
    //     userRepository.save(user);
    //     return "User registered successfully";
    // }

    

    @PostMapping("/validate")
    public ResponseEntity<String> loginUser(@RequestParam("userEmail")String userEmail, @RequestParam("userPassword")String userPassword){
        // Authentication is handled by Spring Security
        this.authService.validateUser(userEmail, userPassword);
        return new ResponseEntity<>("SuccessFully Logged in",HttpStatus.OK);
    }
}
