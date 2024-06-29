package com.example.roommate;

import java.time.LocalDate;
import java.util.List;

import com.example.room.Room;
import com.example.user.User;

public interface RoommateService {

    RoomMate createRoomMate(Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age, String occupation,
			String preference, String roomImageUrl, String roomImagePublicId, String roomVideoUrl,
			String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
			String address, LocalDate availableFrom, User user);

    List<RoomMate> getRoommatesByRoomId(Long roomId);

    RoomMate getRoommateById(Long id);

    RoomMate updateRoommate(Long id, String description, String preferences);

    void deleteRoommate(Long id);
}
