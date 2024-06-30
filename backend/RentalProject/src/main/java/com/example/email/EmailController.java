package com.example.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.otp.OtpService;

@RestController
@CrossOrigin("*")
public class EmailController {
    @Autowired
    private EmailService emailService;


    @PostMapping("/send-otp/{userEmail}")
    public ResponseEntity<String> sendOtpMailToUser(@PathVariable("userEmail") String userEmail) {
     System.out.println(userEmail);
        String response = this.emailService.sendOtpMail(userEmail);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    // @PostMapping("send-message")
    // public ResponseEntity<String> sendMesssageMailToUser(@RequestParam("userEmail") String userEmail) {

    // }
}
