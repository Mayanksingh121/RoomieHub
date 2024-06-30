package com.example.auth;

public interface AuthService {
    // public void registerUser();
    public void validateUser(String userEmail, String userPassword);
}
