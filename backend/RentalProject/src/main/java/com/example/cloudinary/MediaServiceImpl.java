package com.example.cloudinary;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class MediaServiceImpl implements MediaService {
	@Autowired
	private Cloudinary cloudinary;

	@SuppressWarnings("unchecked")
	public Map<String, Object> uploadMedia(MultipartFile file) {
		try {
			Map<String, Object> uploadResult = new HashMap<>();
			String fileType = file.getContentType();

			if (fileType != null && fileType.startsWith("video")) {
				// Handling video upload
				uploadResult = cloudinary.uploader().upload(file.getBytes(),
						ObjectUtils.asMap("resource_type", "video"));
			} else {
				// Handling image upload
				uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
			}
			System.out.println("url" + uploadResult.get("secure_url"));
			return uploadResult;
		} catch (IOException e) {
			throw new RuntimeException("Failed to upload media", e);
		}
	}
}
