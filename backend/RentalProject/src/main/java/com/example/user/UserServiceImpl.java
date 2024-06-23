package com.example.user;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.cloudinary.MediaServiceImpl;
import com.example.exception.ResourceNotFoundException;
import com.example.room.Room;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MediaServiceImpl mediaServiceImpl;

	@Override
	public User saveUser(String name, String userEmail, String userPassword, MultipartFile file, Long userPhoneNumber)
			throws IOException {
		Map<String, Object> mediaObject = this.mediaServiceImpl.uploadMedia(file);
		String userProfile = (String) mediaObject.get("secure_url");
		User user = new User(name, userEmail, userPassword, userProfile, null, userPhoneNumber);
		return userRepository.save(user);
	}

	@Override
	@Transactional
	public User addRoom(String userEmail, Room room) {
		User user = userRepository.findByUserEmail(userEmail);
		if (user == null) {
			throw new ResourceNotFoundException("User not found with email: " + userEmail);
		}
		user.getRooms().add(room);
		room.setUser(user); // Ensure the room is correctly linked to the user
		return userRepository.save(user);
	}

	@Override
	public User getUserByUserEmail(String userEmail) {
		User user = userRepository.findByUserEmail(userEmail);
		if (user == null) {
			throw new ResourceNotFoundException("User not found with email: " + userEmail);
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
	public User updateUser(Long userId, String name, String userEmail, String userPassword, MultipartFile userProfile,
			Long userPhoneNumber) throws IOException {
		User user = getUserById(userId);
		user.setName(name);
		user.setUserEmail(userEmail);
		user.setUserPassword(userPassword);
		user.setUserPhoneNumber(userPhoneNumber);

		if (userProfile != null) {
//            user.setUserProfile(userProfile.getBytes());
		}

		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Long userId) {
		User user = getUserById(userId);
		userRepository.delete(user);
	}

}
