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
			Map<String, Object> mediaUploadResponse = new HashMap<>();
			String fileType = file.getContentType();

			if (fileType != null && fileType.startsWith("video")) {
				// Handling video upload
				mediaUploadResponse = this.cloudinary.uploader().upload(file.getBytes(),
						ObjectUtils.asMap("resource_type", "video"));
			} else {
				// Handling image upload
				mediaUploadResponse = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
			}

			return mediaUploadResponse;
		} catch (IOException e) {
			throw new RuntimeException("Failed to upload media", e);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> updateMedia(MultipartFile file, String publicId) {
		try {
			Map<String, Object> mediaUploadResponse = new HashMap<>();
			String fileType = file.getContentType();

			Map<String, Object> mediaOverrideParams = ObjectUtils.emptyMap();
			if (publicId != null) {
				mediaOverrideParams = ObjectUtils.asMap(
						"public_id", publicId,
						"overwrite", true);
			}

			if (fileType != null && fileType.startsWith("video")) {
				mediaUploadResponse = this.cloudinary.uploader().upload(file.getBytes(),
						ObjectUtils.asMap("resource_type", "video", "public_id", publicId, "overwrite", true));
			} else {
				mediaUploadResponse = this.cloudinary.uploader().upload(file.getBytes(), mediaOverrideParams);
			}

			return mediaUploadResponse;
		} catch (IOException e) {
			throw new RuntimeException("Failed to upload media", e);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> deleteMedia(String publicId, String resourceType) {
		try {
			Map<String, Object> mediaOverrideParams = ObjectUtils.asMap(
					"resource_type", resourceType);
			Map<String, Object> result = this.cloudinary.uploader().destroy(publicId, mediaOverrideParams);
			return result;
		} catch (IOException e) {
			System.out.println(e.getLocalizedMessage() + " " + e.getMessage() + " " + e.getCause());
			throw new MediaNotUploadException("Failed to delete media: " + e.getMessage() + e.getCause());
		}
	}

}
