package com.example.user;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.cloudinary.CloudinaryService;
import com.example.exception.ResourceNotFoundException;
import com.example.exception.UserAlreadyExistsException;
import com.example.exception.UserNotFoundException;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    public String saveUser(String name, String userEmail, String userPassword, Long userPhoneNumber)
            throws IOException {
        if (this.userRepository.existsByUserEmail(userEmail)) {
            throw new UserAlreadyExistsException("User with given email is  already exists");
        }

        User user = new User(name, userEmail, userPassword, userPhoneNumber);
        this.userRepository.save(user);
        return "User Added Successfully";
    }



    @Override
    public String deleteProfile(String userEmail) {
        User user = this.userRepository.findByUserEmail(userEmail);
        if (user.getUserProfileUrl() == null) {
            log.warn("No USer with given email address"+userEmail);
            throw new ResourceNotFoundException("Sorry No Image Found");
        }

        this.cloudinaryService.deleteMedia(user.getUserProfilePublicId(), "image");

        user.setUserProfilePublicId(null);
        user.setUserProfileUrl(null);

        return "Profile Deleted Successfully";

    }

    @Transactional
    @Override
    public String uploadOrUpdateProfile(MultipartFile userProfile, String userEmail) {
        User user = this.userRepository.findByUserEmail(userEmail);
        if (user == null) {
            log.error("User not found with email: " + userEmail);
            throw new UserNotFoundException("User not found with email: " + userEmail);
        }

        boolean isUpdate = false;
        if (user.getUserProfileUrl() != null && user.getUserProfilePublicId() != null) {
            this.cloudinaryService.deleteMedia(user.getUserProfilePublicId(), "image");
            isUpdate = true;
        }

        Map<String, Object> mediaObject = this.cloudinaryService.uploadMedia(userProfile);
        String userProfileUrl = (String) mediaObject.get("secure_url");
        String userProfilePublicId = (String) mediaObject.get("public_id");

        user.setUserProfilePublicId(userProfilePublicId);
        user.setUserProfileUrl(userProfileUrl);
        this.userRepository.save(user);

        return isUpdate ? "Profile Updated Successfully" : "Profile Uploaded Successfully";
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
    public String updateUser(String name, String userEmail, String userPassword, MultipartFile userProfile,
            Long userPhoneNumber) throws IOException {
        User user = this.userRepository.findByUserEmail(userEmail);
        if (user.getUserProfileUrl() != null) {
            if (userProfile != null && user.getUserProfilePublicId() != null) {
                this.cloudinaryService.deleteMedia(user.getUserProfilePublicId(), "image");
                Map<String, Object> uploadMap = this.cloudinaryService.uploadMedia(userProfile);
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

        userRepository.save(user);

        return "User Updated Successfully";
    }

    @Override
    public String deleteUser(String userEmail) {
        User user = getUserByUserEmail(userEmail);
        if (user.getUserProfileUrl() != null) {
            if (user.getUserProfilePublicId() != null) {
                this.cloudinaryService.deleteMedia(user.getUserProfilePublicId(), "image");
            }
        }
        this.userRepository.delete(user);
        return "User deleted successfully";
    }

}
