package com.example.room;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.cloudinary.CloudinaryServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.roommate.RoommateRepository;
import com.example.user.User;
import com.example.user.UserRepository;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository roomRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoommateRepository roommateRepository;
	@Autowired
	private CloudinaryServiceImpl cloudinaryServiceImpl;

	@Override
	public Room saveRoom(Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea,
			MultipartFile roomImage, Double rent, Double securityDeposit, String description, String landmark,
			String state, String city, String address, FurnishedStatus furnishedStatus, String userEmail,
			MultipartFile roomVideo, String preference)
			throws IOException {
		// Upload the image and video
		Map<String, Object> imageObject = this.cloudinaryServiceImpl.uploadMedia(roomImage);
		Map<String, Object> videoObject = this.cloudinaryServiceImpl.uploadMedia(roomVideo);
		String roomImageUrl = (String) imageObject.get("secure_url");
		String imagePublicId = (String) imageObject.get("public_id");
		String roomVideoUrl = (String) videoObject.get("secure_url");
		String videoPublicId = (String) videoObject.get("public_id");

  System.out.println(videoPublicId+" video url "+roomVideoUrl);

		// Fetch the user by email
		User user = this.userRepository.findByUserEmail(userEmail);


		if (user == null) {
			throw new ResourceNotFoundException("User not found with email: " +
					userEmail);
		}

		Room room = new Room(numberOfBalconies, bathRooms, floorNumber, roomArea, preference, roomImageUrl, imagePublicId, roomVideoUrl, videoPublicId, rent, securityDeposit, description, landmark, state, city, address, furnishedStatus, user);
		return this.roomRepository.save(room);
	}



	@Override
	public List<Room> getAllRooms() {
		return this.roomRepository.findAll();
	}

	@Override
	public Room getRoomById(Long roomId) {
		return roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
	}

	// @Override
	// public Room addRoommateToRoom(Long roomId, String description, String preferences) {
	// 	Room room = roomRepository.findById(roomId)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
	// 	RoomMate roommate = new RoomMate(description, preferences, room);
	// 	room.addRoommate(roommate);
	// 	roommateRepository.save(roommate);
	// 	return roomRepository.save(room);
	// }

	@Override
	public Room updateRoom(Long roomId, Integer numberOfBalconies, Integer bathRooms, String floorNumber,
			String roomArea, MultipartFile roomImage, Double rent, Double securityDeposit, String description,
			String landmark, String state, String city, String address, FurnishedStatus furnishedStatus,
			String userEmail, MultipartFile roomVideo, String preference) throws IOException {
		Room room = getRoomById(roomId);

		if (room.getRoomImageUrl() != null) {

			if (roomImage!=null && room.getRoomImagePublicId() != null) {
				this.cloudinaryServiceImpl.deleteMedia(room.getRoomImagePublicId(),"image");
				Map<String, Object> uploadResult = this.cloudinaryServiceImpl.uploadMedia(roomImage);
				room.setRoomImageUrl(uploadResult.get("secure_url").toString());
				room.setRoomImagePublicId(uploadResult.get("public_id").toString());
			}
		}

		if (room.getRoomVideoUrl() != null) {
			if (roomVideo!=null && room.getRoomVideoPublicId() != null) {
				this.cloudinaryServiceImpl.deleteMedia(room.getRoomVideoPublicId(),"video");
				Map<String, Object> uploadResult = this.cloudinaryServiceImpl.uploadMedia(roomVideo);
				room.setRoomVideoUrl(uploadResult.get("secure_url").toString());
				room.setRoomVideoPublicId(uploadResult.get("public_id").toString());
			}
		}


		room.setNumberOfBalconies(numberOfBalconies);
		room.setBathRooms(bathRooms);
		room.setFloorNumber(floorNumber);
		room.setRoomArea(roomArea);
		room.setRent(rent);
		room.setState(state);
		room.setCity(city);
		room.setAddress(address);
		room.setDescription(description);
		room.setLandmark(landmark);
		room.setPreference(preference);
		room.setSecurityDeposit(securityDeposit);
		room.setFurnishedStatus(furnishedStatus);


		return roomRepository.save(room);
	}

	@Override
	public void deleteRoom(Long roomId) {
		Room room = getRoomById(roomId);
		if (room.getRoomImagePublicId() != null) {
			this.cloudinaryServiceImpl.deleteMedia(room.getRoomImagePublicId(),"image");
		}
		if (room.getRoomVideoPublicId() != null) {
			this.cloudinaryServiceImpl.deleteMedia(room.getRoomVideoPublicId(),"video");
		}
		roomRepository.delete(room);
	}

}
