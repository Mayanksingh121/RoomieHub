package com.example.user;

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
//@RequestMapping(value = "/api/user")
@CrossOrigin("*")

public class UserController {

	@Autowired
	private UserService userService;



//	@Autowired
//	UserRepository userRepository;
//

@PostMapping("/add-user")
public ResponseEntity<User> addUser(
		@RequestParam("userEmail") String userEmail,
		@RequestParam(name = "name") String name,
		@RequestParam("userPassword") String userPassword,
		@RequestParam(name = "userProfile", required = false) MultipartFile userProfile,
		@RequestParam("userPhoneNumber") Long userPhoneNumber) throws IOException {

	User user = userService.saveUser(name, userEmail, userPassword, userProfile, userPhoneNumber);
	return new ResponseEntity<>(user, HttpStatus.CREATED);
}

	//    @PostMapping("/add-user")
	//     public ResponseEntity<User> addUser(
	//             @RequestParam("userEmail") String userEmail,
	//             @RequestParam(name = "name", required = false) String name,
	//             @RequestParam("userPassword") String userPassword,
	//             @RequestParam(name = "userProfile", required = false) MultipartFile userProfile,
	//             @RequestParam("userPhoneNumber") Long userPhoneNumber) throws IOException {

	//         User user = userService.saveUser(name, userEmail, userPassword, userProfile, userPhoneNumber);
	//         return new ResponseEntity<>(user, HttpStatus.CREATED);
	//     }

//	@PostMapping("/add-user")
//	public ResponseEntity<User> addUser(@RequestParam("userEmail") String userEmail,
//			@RequestParam(name = "name", required = false) String name,
//			@RequestParam("userPassword") String userPassword,
//			@RequestParam(name = "userProfile", required = false) MultipartFile userProfile,
//			@RequestParam("userPhoneNumber") Long userPhoneNumber) throws IOException {
//		User user = userService.saveUser(name, userEmail, userPassword, userProfile, userPhoneNumber);
//		return new ResponseEntity<>(user, HttpStatus.CREATED);
//	}

//	@GetMapping("/get-user/{userEmail}")
//	public User getUserByEmail (@PathVariable("userEmail") String userEmail)
//	{
//		return this.userRepository.findByUserEmail(userEmail);
//	}

//    uncomment it

//    @GetMapping("/user")
//    public ResponseEntity<User> getUser(@RequestParam("userName") String userName) {
//        User user = userService.getUserByUsername(userName);
//        return new ResponseEntity<>(user, HttpStatus.OK);
//    }

	@GetMapping("/get-user/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable Long userId) {
		User user = userService.getUserById(userId);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@GetMapping("/get-all-users")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@PutMapping("/update-user/{userEmail}")
	public ResponseEntity<User> updateUser(@PathVariable String userEmail, @RequestParam("name") String name,
			 @RequestParam("userPassword") String userPassword,
			@RequestParam(name = "userProfile", required = false) MultipartFile file,
			@RequestParam("userPhoneNumber") Long userPhoneNumber) throws IOException {
		User updatedUser = userService.updateUser( name, userEmail, userPassword, file, userPhoneNumber);
		return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	}

	@DeleteMapping("/delete-user/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		this.userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

//	@Autowired
//	private UserService userService;
//
//	@Autowired
//	private UserRepository userRepository;
//
////	@PostMapping("/add-user")
////	public ResponseEntity<User> saveUser(@RequestParam("userName") String userName,
////			@RequestParam("userEmail") String userEmail, @RequestParam("userPassword") String userPassword,
////			@RequestParam(name = "userProfile", required = false) MultipartFile file) throws IOException {
//////		System.out.println(userEmail,userName);
////
////           return ResponseEntity.ok(this.userService.saveUser(userName, userEmail, userPassword, file));
////	}
//
////	@PostMapping("/add-user")
////	public ResponseEntity<User> saveUser(@RequestParam("userName") String userName,
////	                                     @RequestParam("userEmail") String userEmail,
////	                                     @RequestParam("userPassword") String userPassword,
////	                                     @RequestParam(name = "userProfile", required = false) MultipartFile file) throws IOException {
////	    System.out.println(userEmail + " " + userName);
////	    return ResponseEntity.ok(this.userService.saveUser(userName, userEmail, userPassword, file));
////	}
//
//	  @PostMapping("/add-user")
//	    public ResponseEntity<User> saveUser(@RequestParam("userName") String userName,
//	                                         @RequestParam("userEmail") String userEmail,
//	                                         @RequestParam("userPassword") String userPassword,
//	                                         @RequestParam(name = "userProfile", required = false) MultipartFile file) throws IOException {
//	        return ResponseEntity.ok(this.userService.saveUser(userName, userEmail, userPassword, file));
//	    }
//
//		@GetMapping("/user")
//		public User getUser(@RequestParam("userName")String userName) {
//			return this.userRepository.findByUserName(userName);
//		}
//
//

}
