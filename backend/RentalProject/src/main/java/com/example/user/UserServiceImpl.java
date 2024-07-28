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
	public String saveUser(String name, String userEmail, String userPassword,  Long userPhoneNumber)
			throws IOException {
		if (this.userRepository.existsByUserEmail(userEmail)) {
			throw new UserAlreadyExistsException("User with given email is  already exists");
		}

		User user = new User(name, userEmail, userPassword, userPhoneNumber);
		this.userRepository.save(user);
		return "User Added Successfully";
	}

	@Override
	public String uploadProfile(MultipartFile userProfile, String userEmail) {

		if (this.userRepository.existsByUserEmail(userEmail)) {
			throw new UserAlreadyExistsException("User with given email is  already exists");
		}
		if (userProfile == null) {
			throw new ResourceNotFoundException("Image file does not exist");
		}
		Map<String, Object> mediaObject = this.cloudinaryServiceImpl.uploadMedia(userProfile);
		String userProfileUrl = (String) mediaObject.get("secure_url");
		String userProfilePublicId = (String) mediaObject.get("public_id");

		User user = this.userRepository.findByUserEmail(userEmail);
		user.setUserProfilePublicId(userProfilePublicId);
		user.setUserProfileUrl(userProfileUrl);

		return "Image Uploaded Successfully";
	}

	@Override
	public String deleteProfile(String userEmail) {
		User user = this.userRepository.findByUserEmail(userEmail);
		if (user.getUserProfileUrl() == null) {
			throw new ResourceNotFoundException("Sorry No Image Found");
		}

		this.cloudinaryServiceImpl.deleteMedia(user.getUserProfilePublicId(), "image");

		user.setUserProfilePublicId(null);
		user.setUserProfileUrl(null);

		return "Profile Deleted Successfully";

	}


	@Override
	public String updateProfile(MultipartFile userProfile, String userEmail) {
		User user = this.userRepository.findByUserEmail(userEmail);
		if (user.getUserProfileUrl() == null) {
			throw new ResourceNotFoundException("Sorry No Image Found");
		}
		this.cloudinaryServiceImpl.deleteMedia(user.getUserProfilePublicId(), "image");
		Map<String, Object> mediaObject = this.cloudinaryServiceImpl.uploadMedia(userProfile);
		String userProfileUrl = (String) mediaObject.get("secure_url");
		String userProfilePublicId = (String) mediaObject.get("public_id");

		user.setUserProfilePublicId(userProfilePublicId);
		user.setUserProfileUrl(userProfileUrl);

		return "Profile Updated Successfully";
	}

	@Override
	public User getUserByUserEmail(String userEmail) {
		User user = userRepository.findByUserEmail(userEmail);
		if (user == null) {
			throw new ResourceNotFoundException("User not found with provided email: ");
		}
		return user;
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
	public String deleteUser(String userEmail) {
		User user = getUserByUserEmail(userEmail);
		if (user.getUserProfileUrl() != null) {
			if (user.getUserProfilePublicId() != null) {
				this.cloudinaryServiceImpl.deleteMedia(user.getUserProfilePublicId(), "image");
			}
		}
		this.userRepository.delete(user);
		return "User deleted successfully";
	}



}
