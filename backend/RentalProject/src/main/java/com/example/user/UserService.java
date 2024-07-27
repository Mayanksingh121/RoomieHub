package com.example.user;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface UserService {

        User saveUser(String name, String userEmail, String userPassword, MultipartFile userProfile,
                        Long userPhoneNumber)
                        throws IOException;

        User getUserByUserEmail(String userEmail);

        List<User> getAllUsers();

        User updateUser(String name, String userEmail, String userPassword, MultipartFile userProfile,
                        Long userPhoneNumber)
                        throws IOException;

        String deleteUser(String userEmail);
}
