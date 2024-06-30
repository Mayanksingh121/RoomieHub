package com.example.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.user.UserRepository;
import com.example.user.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

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
    // user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
    // userRepository.save(user);
    // return "User registered successfully";
    // }

    @PostMapping("/validate")
    public ResponseEntity<String> loginUser(@RequestParam("userEmail") String userEmail,
            @RequestParam("userPassword") String userPassword, HttpServletRequest request) {
        // Authentication is handled by Spring Security
        System.out.println(userEmail);
        HttpSession session = request.getSession();

        System.out.println("Session id: " + session.getId());
        session.setAttribute("userEmail", userEmail);
        this.authService.validateUser(userEmail, userPassword);
        return new ResponseEntity<>("SuccessFully Logged in", HttpStatus.OK);
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<>("logout Successfully", HttpStatus.OK);

    }

    @GetMapping("/get-session-data")
    public ResponseEntity<String> getMethodName(HttpSession session) {
        String userEmail = (String) session.getAttribute("userEmail");
        return new ResponseEntity<>(userEmail, HttpStatus.OK);
    }

}
