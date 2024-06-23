package com.example.room;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.cloudinary.MediaServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.roommate.RoomMate;
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
	private MediaServiceImpl mediaServiceImpl;

	@Override
	public Room saveRoom(Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea,
			MultipartFile roomImage, Double rent, Double securityDeposit, String description, String landmark,
			String state, String city, String address, FurnishedStatus furnishedStatus, String userEmail,
			MultipartFile roomVideo,String preference) throws IOException {

		// Upload the image and video
		Map<String, Object> imageObject = this.mediaServiceImpl.uploadMedia(roomImage);
		Map<String, Object> videoObject = this.mediaServiceImpl.uploadMedia(roomVideo);
		String roomImageUrl = (String) imageObject.get("secure_url");
		String roomVideoUrl = (String) videoObject.get("secure_url");

		// Fetch the user by email
		User user = this.userRepository.findByUserEmail(userEmail);
		System.out.println("user is " + user);

		if (user == null) {
			throw new ResourceNotFoundException("User not found with email: " + userEmail);
		}

		// Create the Room entity and associate it with the User
		Room room = new Room(numberOfBalconies, bathRooms, floorNumber, roomArea, roomImageUrl, rent, securityDeposit,
				description, landmark, state, city, address, furnishedStatus, user, roomVideoUrl,preference);

		// Save the Room entity
		return roomRepository.save(room);
	}
//    @Override
//    public Room saveRoom(Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea,
//                         MultipartFile roomImage, Double rent, Double securityDeposit, String description, String landmark,
//                         String state, String city, String address, FurnishedStatus furnishedStatus, String userEmail,
//                         MultipartFile roomVideo) throws IOException {
//
//    	 Map<String, Object> imageObject = this.mediaServiceImpl.uploadMedia(roomImage);
//    	 Map<String, Object> videoObject = this.mediaServiceImpl.uploadMedia(roomVideo);
//         String roomImageUrl= (String)imageObject.get("secure_url");
//         String roomVideoUrl= (String)videoObject.get("secure_url");
//    	
//     
//
//        User user = this.userRepository.findByUserEmail(userEmail);
////        if (user == null) {
////              throw new ResourceNotFoundException("User not found with email: " + userEmail);
////        }
//
//        Room room = new Room(numberOfBalconies, bathRooms, floorNumber, roomArea, roomImageUrl, rent, securityDeposit,
//                description, landmark, state, city, address, furnishedStatus, user, roomVideoUrl);
//        return roomRepository.save(room);
//    }

//	@Override
//	public Room saveRoom(Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea,
//			MultipartFile roomImage, Double rent, Double securityDeposit, String description, String landmark,
//			String state, String city, String address, FurnishedStatus furnishedStatus, String userEmail,
//			MultipartFile roomVideo) throws IOException {
//		byte[] imageData = null, videoData = null;
//		if (roomImage != null) {
//			imageData = roomImage.getBytes();
//		}
//
//		if (roomVideo != null) {
//			videoData = roomVideo.getBytes();
//		}
//
//		System.out.println("hi" + userEmail);
//		User user = this.userRepository.findByUserEmail(userEmail);
//
//		Room room = new Room(numberOfBalconies, bathRooms, floorNumber, roomArea, imageData, rent, securityDeposit,
//				description, landmark, state, city, address, furnishedStatus, user, videoData);
//		return roomRepository.save(room);
//	}

	@Override
	public List<Room> getAllRooms() {
		return this.roomRepository.findAll();
	}

	@Override
	public Room getRoomById(Long roomId) {
		return roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
	}

	@Override
	public Room addRoommateToRoom(Long roomId, String description, String preferences) {
		Room room = roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
		RoomMate roommate = new RoomMate(description, preferences, room);
		room.addRoommate(roommate);
		roommateRepository.save(roommate);
		return roomRepository.save(room);
	}

	@Override
	public Room updateRoom(Long roomId, Integer numberOfBalconies, Integer bathRooms, String floorNumber,
			String roomArea, MultipartFile roomImage, Double rent, Double securityDeposit, String description,
			String landmark, String state, String city, String address, FurnishedStatus furnishedStatus,
			String userEmail, MultipartFile roomVideo,String preference) throws IOException {
		Room room = getRoomById(roomId);

		byte[] imageData = null, videoData = null;
		if (roomImage != null) {
			imageData = roomImage.getBytes();
		}

		if (roomVideo != null) {
			videoData = roomVideo.getBytes();
		}

		User user = userRepository.findByUserEmail(userEmail);
		if (user == null) {
			throw new ResourceNotFoundException("User not found with Email: " + userEmail);
		}
		room.setNumberOfBalconies(numberOfBalconies);
		room.setBathRooms(bathRooms);
		room.setFloorNumber(floorNumber);
		room.setRoomArea(roomArea);
//		room.setRoomImage(imageData);
//		room.setRoomVideo(videoData);
		room.setRent(rent);
		room.setState(state);
		room.setCity(city);
		room.setAddress(address);
		room.setUser(user);
		room.setDescription(description);
		room.setLandmark(landmark);

		return roomRepository.save(room);
	}

	@Override
	public void deleteRoom(Long roomId) {
		Room room = getRoomById(roomId);
		roomRepository.delete(room);
	}
}
