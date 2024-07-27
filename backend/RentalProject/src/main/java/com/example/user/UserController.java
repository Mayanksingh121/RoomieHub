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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
//@RequestMapping(value = "/api/user")
@CrossOrigin("*")

public class UserController {

	@Autowired
	private UserService userService;

@PostMapping("/add-user")
public ResponseEntity<User> addUser(
		@RequestParam("userEmail") String userEmail,
		@RequestParam(name = "name") String name,
		@RequestParam("userPassword") String userPassword,
		@RequestParam(name = "userProfile", required = false) MultipartFile userProfile,
		@RequestParam("userPhoneNumber") Long userPhoneNumber,
				HttpServletRequest request) throws IOException {
	HttpSession session = request.getSession();
	System.out.println(session.getId());
	session.setAttribute("userEmail", userEmail);
	User user = userService.saveUser(name, userEmail, userPassword, userProfile, userPhoneNumber);
	return new ResponseEntity<>(user, HttpStatus.CREATED);
}



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

	@DeleteMapping("/delete-user/{userId}")
	public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
		String msg=this.userService.deleteUser(userId);
		return new ResponseEntity<>(msg,HttpStatus.OK);
	}



}
