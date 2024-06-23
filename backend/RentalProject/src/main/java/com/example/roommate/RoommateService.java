package com.example.roommate;

import java.util.List;

public interface RoommateService {

    RoomMate createRoomMate(String description, String preferences, Long roomId);

    List<RoomMate> getRoommatesByRoomId(Long roomId);

    RoomMate getRoommateById(Long id);

    RoomMate updateRoommate(Long id, String description, String preferences);

    void deleteRoommate(Long id);
}
