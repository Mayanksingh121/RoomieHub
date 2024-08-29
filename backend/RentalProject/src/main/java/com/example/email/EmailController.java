package com.example.email;

import java.util.HashMap;
import java.util.Map;

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
    public ResponseEntity<Map<String,String>> sendOtpMailToUser(@RequestParam("userEmail") String userEmail) {
        OTP = this.emailService.generateOtp();
   Map<String, String> response = new HashMap<>();
         response.put("message",this.emailService.sendOtpMail(userEmail, OTP)) ;
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @GetMapping("/get-otp")
    public ResponseEntity<Map<String, Integer>> getOtp() {
        Map<String, Integer> response = new HashMap<>();
        response.put("otp", OTP);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @PostMapping("/send-message")
    public ResponseEntity<Map<String, String>> sendMessageMailToUser(@RequestParam("userEmail") String userEmail) {
        Map<String, String> response = new HashMap<>();
        response.put("message", this.emailService.sendMessageMailString(userEmail)) ;
        return new ResponseEntity<>(response,HttpStatus.OK);

    }
}
