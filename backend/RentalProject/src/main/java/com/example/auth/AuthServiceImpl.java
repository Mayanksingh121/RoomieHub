package com.example.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.InvalidPasswordException;
import com.example.exception.UserNotFoundException;
import com.example.user.User;
import com.example.user.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public void validateUser(String userEmail, String userPassword) {
        // TODO Auto-generated method stub
        User user = this.userRepository.findByUserEmail(userEmail);
        if (user == null) {
            throw new UserNotFoundException("User with given email  does not exist");
        }
        if (!user.getUserPassword().equals(userPassword)) {
            throw new InvalidPasswordException("Invalid password");
        }

    }

}
