package com.example.otp;

import org.springframework.stereotype.Service;

@Service
public class OtpServiceImpl implements OtpService  {

    @Override
    public int generateOtp() {
        // TODO Auto-generated method stub
        return (int) Math.floor(Math.random() * 99999);
    }

}
