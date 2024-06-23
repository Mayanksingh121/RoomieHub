package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.config.CloudinaryConfig;

@SpringBootApplication
public class RentalProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentalProjectApplication.class, args);
	}
	

    @Bean
     CloudinaryConfig cloudinaryConfig() {
        return new CloudinaryConfig();
    }

}
