package com.example.cloudinary;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.exception.*;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {
	@Autowired
	private Cloudinary cloudinary;

	@SuppressWarnings("unchecked")
	public Map<String, Object> uploadMedia(MultipartFile file) {
		try {
			Map<String, Object> uploadResult = new HashMap<>();
			String fileType = file.getContentType();

			if (fileType != null && fileType.startsWith("video")) {
				// Handling video upload
				uploadResult = this.cloudinary.uploader().upload(file.getBytes(),
						ObjectUtils.asMap("resource_type", "video"));
			} else {
				// Handling image upload
				uploadResult = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
			}

			return uploadResult;
		} catch (IOException e) {
			throw new RuntimeException("Failed to upload media", e);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> deleteMedia(String publicId, String resourceType) {
		try {
			Map<String, Object> options = ObjectUtils.asMap(
					"resource_type", resourceType);
			Map<String, Object> result = this.cloudinary.uploader().destroy(publicId, options);
			return result;
		} catch (IOException e) {
			System.out.println(e.getLocalizedMessage() + " " + e.getMessage() + " " + e.getCause());
			throw new MediaNotUploadException("Failed to delete media: " + e.getMessage()+e.getCause());
		}
	}

}
