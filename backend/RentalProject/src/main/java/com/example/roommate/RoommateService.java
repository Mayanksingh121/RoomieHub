package com.example.roommate;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.example.user.User;

public interface RoommateService {

    RoomMate createRoomMate(Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age,
            String occupation,
            String preference, MultipartFile roomImage, String roomImagePublicId, MultipartFile roomVideo,
            String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
            String address, LocalDate availableFrom, User user);

    // List<RoomMate> getRoommatesByRoomId(Long roomId);

    RoomMate getRoommateById(Long id);

    RoomMate updateRoommate(Long id, Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age,
            String occupation,
            String preference, MultipartFile roomImage, String roomImagePublicId, MultipartFile roomVideo,
            String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
            String address, LocalDate availableFrom);

    String deleteRoommate(Long id);
}
