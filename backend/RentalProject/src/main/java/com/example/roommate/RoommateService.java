package com.example.roommate;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.user.User;

public interface RoommateService {

    String createRoomMate(Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age,
            String occupation,
            String preference, MultipartFile roomImage, String roomImagePublicId, MultipartFile roomVideo,
            String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
            String address, LocalDate availableFrom, User user);

    List<RoomMate> getAllRoommates();


    RoomMate getRoommateById(Long id);

    String updateRoommate(Long id, Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age,
            String occupation,
            String preference, MultipartFile roomImage, String roomImagePublicId, MultipartFile roomVideo,
            String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
            String address, LocalDate availableFrom);

    String deleteRoommate(Long id);
}
