package com.example.email;

public interface EmailService {
    int generateOtp();
    String sendOtpMail(String userEmail,int OTP);
}
