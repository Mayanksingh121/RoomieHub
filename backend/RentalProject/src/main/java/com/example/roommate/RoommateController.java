package com.example.roommate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.room.FurnishedStatus;
import com.example.room.Room;
import com.example.user.User;
import com.example.user.UserService;

@RestController
@RequestMapping("/api/roommates")
public class RoommateController {
	@Autowired
	private RoommateService roommateService;

	@Autowired
	private UserService userService;

	@PostMapping("/add-roommate")
	public ResponseEntity<RoomMate> createRoommate(
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
			@RequestParam(name="preference",required = false)String preference
	) {
		User user = this.userService.getUserByUserEmail(userEmail);
		RoomMate roommate = roommateService.createRoomMate(numberOfBalconies, bathRooms, floorNumber, bathRooms, preference, preference, floorNumber, roomArea, userEmail, preference, securityDeposit, description, landmark, state, city, address, null, user);
		return new ResponseEntity<>(roommate, HttpStatus.CREATED);
	}

	@GetMapping("/room/{roomId}")
	public ResponseEntity<List<RoomMate>> getRoommatesByRoomId(@PathVariable Long roomId) {
		List<RoomMate> roommates = roommateService.getRoommatesByRoomId(roomId);
		return new ResponseEntity<>(roommates, HttpStatus.OK);
	}

	@GetMapping("/get-roommate/{id}")
	public ResponseEntity<RoomMate> getRoommateById(@PathVariable Long id) {
		RoomMate roommate = roommateService.getRoommateById(id);
		return new ResponseEntity<>(roommate, HttpStatus.OK);
	}

	@PutMapping("/update-roommate/{id}")
	public ResponseEntity<RoomMate> updateRoommate(@PathVariable Long id,
			@RequestParam("description") String description, @RequestParam("preferences") String preferences) {
		RoomMate updatedRoommate = roommateService.updateRoommate(id, description, preferences);
		return new ResponseEntity<>(updatedRoommate, HttpStatus.OK);
	}

	@DeleteMapping("/delete-roommate/{id}")
	public ResponseEntity<Void> deleteRoommate(@PathVariable Long id) {
		roommateService.deleteRoommate(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
//
//    @PostMapping("/create")
//    public ResponseEntity<RoomMate> createRoommate(@RequestParam("roomId") Long roomId,
//                                                   @RequestParam("description") String description,
//                                                   @RequestParam("preferences") String preferences) {
//        return ResponseEntity.ok(roommateService.createRoommate(roomId, description, preferences));
//    }
//
//    @GetMapping("/room/{roomId}")
//    public ResponseEntity<List<RoomMate>> getRoommatesByRoomId(@PathVariable Long roomId) {
//        return ResponseEntity.ok(roommateService.getRoommatesByRoomId(roomId));
//    }
}