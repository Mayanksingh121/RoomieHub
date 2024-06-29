// package com.example.email;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.otp.OtpService;

// @RestController
// @CrossOrigin("*")
// public class EmailController {
//     @Autowired
//     private EmailService emailService;


//     @PostMapping("send-otp")
//     public ResponseEntity<String> sendOtpToUser(@RequestParam("userEmail") String userEmail) {

//         String response = this.emailService.sendOtpMail(userEmail);
//         return new ResponseEntity<>(response, HttpStatus.OK);

//     }

//     @PostMapping("send-message")
//     public ResponseEntity<String> sendMesssageMailToUser(@RequestParam("userEmail") String userEmail) {

//     }
// }
