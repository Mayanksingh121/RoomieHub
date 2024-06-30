package com.example.otp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class OtpController {

    @Autowired
    private OtpService otpService;

    @GetMapping("get-otp")
    public int getOtp() {
        return this.otpService.generateOtp();
    }

}
