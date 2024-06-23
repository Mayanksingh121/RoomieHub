package com.example.cloudinary;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface MediaService {
	public Map<String, Object> uploadMedia(MultipartFile file);
}
