package com.example.roommate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cloudinary.MediaServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.room.Room;
import com.example.room.RoomRepository;

@Service
public class RoommateServiceImpl implements RoommateService {

	@Autowired
	private RoommateRepository roommateRepository;

	@Autowired
	private RoomRepository roomRepository;
	
	@Autowired
	private MediaServiceImpl mediaServiceImpl;

	@Override
	public RoomMate createRoomMate(String description, String preferences, Long roomId) {
		Room room = null;
		if (roomId != null) {
			room = roomRepository.findById(roomId).orElse(null);
		}
		RoomMate roomMate = new RoomMate(description, preferences, room);
		return roommateRepository.save(roomMate);
	}

	@Override
	public List<RoomMate> getRoommatesByRoomId(Long roomId) {
		return roommateRepository.findByRoomRoomId(roomId);
	}

	@Override
	public RoomMate getRoommateById(Long id) {
		return roommateRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Roommate not found with id: " + id));
	}

	@Override
	public RoomMate updateRoommate(Long id, String description, String preferences) {
		RoomMate roommate = getRoommateById(id);
		roommate.setDescription(description);
		roommate.setPreferences(preferences);
		return roommateRepository.save(roommate);
	}

	@Override
	public void deleteRoommate(Long id) {
		RoomMate roommate = getRoommateById(id);
		roommateRepository.delete(roommate);
	}
}
