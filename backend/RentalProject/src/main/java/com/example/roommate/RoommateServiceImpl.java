package com.example.roommate;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cloudinary.CloudinaryServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.room.Room;
import com.example.room.RoomRepository;
import com.example.user.User;

@Service
public class RoommateServiceImpl implements RoommateService {

	@Autowired
	private RoommateRepository roommateRepository;

	@Autowired
	private RoomRepository roomRepository;

	@Autowired
	private CloudinaryServiceImpl mediaServiceImpl;

	@Override
	public RoomMate createRoomMate(Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age, String occupation,
			String preference, String roomImageUrl, String roomImagePublicId, String roomVideoUrl,
			String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
			String address, LocalDate availableFrom, User user) {
		// TODO Auto-generated method stub
		RoomMate roomMate = new RoomMate(numberOfBalconies, bathRooms, floorNumber, age, occupation, preference, roomImageUrl, roomImagePublicId, roomVideoUrl, roomVideoPublicId, budget, description, landmark, state, city, address, availableFrom, user);
		return this.roommateRepository.save(roomMate);
	}



	@Override
	public RoomMate getRoommateById(Long id) {
		return roommateRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Roommate not found with id: " + id));
	}

	// @Override
	// public RoomMate updateRoommate(Long id, String description, String preferences) {
	// 	RoomMate roommate = getRoommateById(id);
	// 	roommate.setDescription(description);
	// 	roommate.setPreferences(preferences);
	// 	return roommateRepository.save(roommate);
	// }

	@Override
	public void deleteRoommate(Long id) {
		RoomMate roommate = getRoommateById(id);
		roommateRepository.delete(roommate);
	}

}
