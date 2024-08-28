package com.example.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.example.exception.InvalidPasswordException;
import com.example.exception.UserNotFoundException;
import com.example.jwt.JWTService;
// import com.example.jwt.JWTService;
import com.example.user.User;
import com.example.user.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public String validateUser(String userEmail, String userPassword) {
        User user = this.userRepository.findByUserEmail(userEmail);
        if (user == null) {
            throw new UserNotFoundException("User with given email does not exist");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUserEmail(), userPassword));

        if (!authentication.isAuthenticated()) {
            throw new InvalidPasswordException("Invalid password");
        }

        // Generate JWT token
        String token = jwtService.generateToken(user.getUserEmail());
        return token;
    }

    // @Scheduled(fixedRate = 10000)
    // public void isUserIdle() {
    //     HttpServletRequest request;
    //     HttpSession session = request.getSession(false);
    //     if (session == null) {
    //         System.out.println("session is over");
    //     }
    // }



}
