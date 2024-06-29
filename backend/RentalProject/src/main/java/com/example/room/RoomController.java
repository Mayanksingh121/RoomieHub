package com.example.room;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")

public class RoomController {
	@Autowired
	private RoomService roomService;

	@PostMapping("/add-room")
	public ResponseEntity<Room> addRoom(
			@RequestParam(name = "numberOfBalconies") Integer numberOfBalconies,
			@RequestParam(name = "bathRooms") Integer bathRooms,
			@RequestParam(name = "floorNumber") String floorNumber,
			@RequestParam(name = "roomArea" ) String roomArea,
			@RequestParam(name = "roomImage") MultipartFile roomImage,
			@RequestParam(name = "roomVideo" ) MultipartFile roomVideo,
			@RequestParam(name = "rent") Double rent, @RequestParam(name = "securityDeposit") Double securityDeposit,
			@RequestParam(name = "description") String description, @RequestParam(name = "landmark") String landmark,
			@RequestParam(name = "state") String state, @RequestParam(name = "city") String city,
			@RequestParam(name = "address") String address,
			@RequestParam(name = "furnishedStatus") FurnishedStatus furnishedStatus,
			@RequestParam(name = "userEmail") String userEmail,
			@RequestParam(name="preference",required = false)String preference) throws IOException {

		try {
			Room room = roomService.saveRoom(numberOfBalconies, bathRooms, floorNumber, roomArea, roomImage, rent,
					securityDeposit, description, landmark, state, city, address, furnishedStatus, userEmail,
					roomVideo,preference);
			return new ResponseEntity<>(room, HttpStatus.CREATED);
		} catch (Exception ex) {
			// Log the exception details
			ex.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//
//	@PostMapping("/add-room")
//	public ResponseEntity<Room> addRoom(
//			@RequestParam(name = "numberOfBalconies", required = false) Integer numberOfBalconies,
//			@RequestParam(name = "bathRooms", required = false) Integer bathRooms,
//			@RequestParam(name = "floorNumber", required = false) String floorNumber,
//			@RequestParam(name = "roomArea", required = false) String roomArea,
//			@RequestParam(name = "roomImage", required = false) MultipartFile roomImage,
//			@RequestParam(name = "roomVideo", required = false) MultipartFile roomVideo,
//			@RequestParam(name = "rent") Double rent, @RequestParam(name = "securityDeposit") Double securityDeposit,
//			@RequestParam(name = "description") String description, @RequestParam(name = "landmark") String landmark,
//			@RequestParam(name = "state") String state, @RequestParam(name = "city") String city,
//			@RequestParam(name = "address") String address,
//			@RequestParam(name = "furnishedStatus") FurnishedStatus furnishedStatus,
//			@RequestParam(name = "userEmail") String userEmail) throws IOException {
//		Room room = roomService.saveRoom(numberOfBalconies, bathRooms, floorNumber, roomArea, roomImage, rent,
//				securityDeposit, description, landmark, state, city, address, furnishedStatus, userEmail, roomVideo);
//		return new ResponseEntity<>(room, HttpStatus.CREATED);
//	}

	@GetMapping("/get-all-rooms")
	public ResponseEntity<List<Room>> getAllRooms() {
		List<Room> rooms = roomService.getAllRooms();
		System.out.println(rooms);
		return new ResponseEntity<>(rooms, HttpStatus.OK);
	}

	@GetMapping("/get-room/{id}")
	public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
		Room room = roomService.getRoomById(id);
		return new ResponseEntity<>(room, HttpStatus.OK);
	}

	@PutMapping("/update-room/{roomId}")
	public ResponseEntity<Room> updateRoom(
			@RequestParam(name = "numberOfBalconies", required = false) Integer numberOfBalconies,
			@RequestParam(name = "bathRooms", required = false) Integer bathRooms,
			@RequestParam(name = "floorNumber", required = false) String floorNumber,
			@RequestParam(name = "roomArea", required = false) String roomArea,
			@RequestParam(name = "roomImage", required = false) MultipartFile roomImage,
			@RequestParam(name = "roomVideo", required = false) MultipartFile roomVideo,
			@RequestParam(name = "rent", required = false) Double rent,
			@RequestParam(name = "securityDeposit", required = false) Double securityDeposit,
			@RequestParam(name = "description", required = false) String description,
			@RequestParam(name = "landmark", required = false) String landmark,
			@RequestParam(name = "state", required = false) String state,
			@RequestParam(name = "city", required = false) String city,
			@RequestParam(name = "address", required = false) String address,
			@RequestParam(name = "furnishedStatus", required = false) FurnishedStatus furnishedStatus,
			@RequestParam(name = "userEmail", required = false) String userEmail,
			@RequestParam(name="preference",required = false)String preference, @PathVariable("roomId") Long roomId)
			throws IOException {

		try {
			Room room = roomService.updateRoom(roomId, numberOfBalconies, bathRooms, floorNumber, roomArea, roomImage,
					rent, securityDeposit, description, landmark, state, city, address, furnishedStatus, userEmail,
					roomVideo,preference);
			return new ResponseEntity<>(room, HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	@PutMapping("/update-room/{roomId}")
//	public ResponseEntity<Room> updateRoom(
//			@RequestParam(name = "numberOfBalconies", required = false) Integer numberOfBalconies,
//			@RequestParam(name = "bathRooms", required = false) Integer bathRooms,
//			@RequestParam(name = "floorNumber", required = false) String floorNumber,
//			@RequestParam(name = "roomArea", required = false) String roomArea,
//			@RequestParam(name = "roomImage", required = false) MultipartFile roomImage,
//			@RequestParam(name = "roomVideo", required = false) MultipartFile roomVideo,
//			@RequestParam(name = "rent", required = false) Double rent,
//			@RequestParam(name = "securityDeposit", required = false) Double securityDeposit,
//			@RequestParam(name = "description", required = false) String description,
//			@RequestParam(name = "landmark", required = false) String landmark,
//			@RequestParam(name = "state", required = false) String state,
//			@RequestParam(name = "city", required = false) String city,
//			@RequestParam(name = "address", required = false) String address,
//			@RequestParam(name = "furnishedStatus", required = false) FurnishedStatus furnishedStatus,
//			@RequestParam(name = "userEmail", required = false) String userEmail, @PathVariable("roomId") Long roomId
//
//	) throws IOException {
//
//		Room room = roomService.updateRoom(roomId, numberOfBalconies, bathRooms, floorNumber, roomArea, roomImage, rent,
//				securityDeposit, description, landmark, state, city, address, furnishedStatus, userEmail, roomVideo);
//		return new ResponseEntity<>(room, HttpStatus.OK);
//	}

	@DeleteMapping("/delete-room/{roomId}")
	public ResponseEntity<Void> deleteRoom(@PathVariable Long roomId) {
		roomService.deleteRoom(roomId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

//	@PostMapping("/add-room")
//	public ResponseEntity<Room> addRoom(@RequestParam(name = "roomImage",required = false) MultipartFile file,
//			@RequestParam(name = "rent") Double rent, @RequestParam(name = "state") String state,
//			@RequestParam(name = "city") String city, @RequestParam(name = "location") String location,
//			@RequestParam(name = "username",required = false) String username) {
//		return ResponseEntity.ok(this.roomService.saveRoom(file, rent, state, city, location, username));
//	}
//	@PostMapping("/add-room")
//	public ResponseEntity<Room> addRoom(@RequestParam(name = "numberOfBalcanies", required = false) int numberOfBalcanies,
//			@RequestParam(name ="bathRooms", required = false)String bathRooms,@RequestParam(name ="floorNumber", required = false) int flooNumber,
//			@RequestParam(name ="roomArea", required = false)String roomArea,@RequestParam(name ="roommates", required = false)List<RoomMate> roomates,
//			@RequestParam(name = "roomImage", required = false) MultipartFile file,
//			@RequestParam(name = "rent") Double rent, @RequestParam(name = "state") String state,
//			@RequestParam(name = "city") String city, @RequestParam(name = "location") String location,
//			@RequestParam(name = "userName", required = false) String userName) throws IOException {
//		System.out.println(userName);
////		int numberOfBalcanies, String bathRooms, int floorNumber, String roomArea, MultipartFile file,
////		double rent, String state, String city, String location, List<RoomMate> roommates, String userName
//		return ResponseEntity.ok(this.roomService.saveRoom(numberOfBalcanies,bathRooms,flooNumber,roomArea,file, rent, state, city, location,roomates, userName));
//	}
//
//	@GetMapping("/get-all-rooms")
//	public ResponseEntity<List<Room>> getAllRooms() {
//		List<Room> rooms = this.roomService.getAllRooms();
//		System.out.println(rooms);
//		return ResponseEntity.ok(this.roomService.getAllRooms());
//	}
}
