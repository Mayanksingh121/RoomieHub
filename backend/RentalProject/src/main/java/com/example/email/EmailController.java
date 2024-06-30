package com.example.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class EmailController {
    @Autowired
    private EmailService emailService;

    private static int OTP;


    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtpMailToUser(@RequestParam("userEmail") String userEmail) {
        OTP = this.emailService.generateOtp();
        System.out.println("OTP=" + OTP);
        String response = this.emailService.sendOtpMail(userEmail, OTP);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @GetMapping("/get-otp")
    public int getOtp() {
        return OTP;
    }
    // @PostMapping("send-message")
    // public ResponseEntity<String> sendMesssageMailToUser(@RequestParam("userEmail") String userEmail) {

    // }
}
