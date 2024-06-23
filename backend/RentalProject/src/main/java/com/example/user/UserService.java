package com.example.user;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.room.Room;

public interface UserService {

    User saveUser(String name, String userEmail, String userPassword, MultipartFile file,Long  userPhoneNumber) throws IOException;

    User addRoom(String userEmail, Room room);

    User getUserByUserEmail(String userEmail);

    User getUserById(Long id);

    List<User> getAllUsers();

    User updateUser(Long userId, String name, String userEmail, String userPassword, MultipartFile userProfile,Long  userPhoneNumber) throws IOException;

    void deleteUser(Long userId);
}
