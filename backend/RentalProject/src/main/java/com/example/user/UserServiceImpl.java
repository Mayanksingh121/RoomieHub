package com.example.user;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.cloudinary.CloudinaryServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.exception.UserAlreadyExistsException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CloudinaryServiceImpl cloudinaryServiceImpl;

	@Override
	public User saveUser(String name, String userEmail, String userPassword, MultipartFile file, Long userPhoneNumber)
			throws IOException {
		if (this.userRepository.existsByUserEmail(userEmail)) {
			throw new UserAlreadyExistsException("User with given email is  already exists");
		}
		Map<String, Object> mediaObject = this.cloudinaryServiceImpl.uploadMedia(file);
		String userProfileUrl = (String) mediaObject.get("secure_url");
		String userProfilePublicId = (String) mediaObject.get("public_id");
		System.out.println("url=" + userProfileUrl + " public_id=" + userProfilePublicId);
		User user = new User(name, userEmail, userPassword, userPhoneNumber, userProfileUrl, userProfilePublicId);
		return userRepository.save(user);
	}

	// @Override
	// @Transactional
	// public User addRoom(String userEmail, Room room) {
	// 	User user = userRepository.findByUserEmail(userEmail);
	// 	if (user == null) {
	// 		throw new ResourceNotFoundException("User not found with email: " + userEmail);
	// 	}
	// 	user.getRooms().add(room);
	// 	room.setUser(user); // Ensure the room is correctly linked to the user
	// 	return userRepository.save(user);
	// }

	@Override
	public User getUserByUserEmail(String userEmail) {
		User user = userRepository.findByUserEmail(userEmail);
		if (user == null) {
			throw new ResourceNotFoundException("User not found with provided email: ");
		}
		return user;
	}

	@Override
	public User getUserById(Long id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User updateUser(String name, String userEmail, String userPassword, MultipartFile userProfile,
			Long userPhoneNumber) throws IOException {
		User user = this.userRepository.findByUserEmail(userEmail);
		if (user.getUserProfileUrl() != null) {
			if (userProfile != null && user.getUserProfilePublicId() != null) {
				this.cloudinaryServiceImpl.deleteMedia(user.getUserProfilePublicId(), "image");
				Map<String, Object> uploadMap = this.cloudinaryServiceImpl.uploadMedia(userProfile);
				user.setUserProfileUrl(uploadMap.get("secure_url").toString());
				user.setUserProfilePublicId(uploadMap.get("public_id").toString());

			}
		}

		if (name != null) {
			user.setName(name);
		}

		if (userEmail != null) {
			user.setUserEmail(userEmail);
		}

		if (userPassword != null) {
			user.setUserPassword(userPassword);
		}

		if (userPhoneNumber != null) {
			user.setUserPhoneNumber(userPhoneNumber);
		}

		return userRepository.save(user);
	}

	@Override
	public String deleteUser(Long userId) {
		User user = getUserById(userId);
		if (user.getUserProfileUrl() != null) {
			if (user.getUserProfilePublicId() != null) {
				this.cloudinaryServiceImpl.deleteMedia(user.getUserProfilePublicId(), "image");
			}
		}
		this.userRepository.delete(user);
		return "User deleted successfully";
	}

}
