package com.example.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Override
    public int generateOtp() {
        // TODO Auto-generated method stub
        return (int) Math.floor(Math.random() * 99999);
    }

    @Override
    public String sendOtpMail(String receiverEmail, int OTP) {
        // TODO Auto-generated method stub
        System.out.println("Sender email: " + senderEmail);
        try {

            MimeMessage mimeMessage = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setFrom(senderEmail);
            helper.setTo(receiverEmail);
            helper.setSubject("Forgot Password - OTP Verification");
            String htmlContent = "<!DOCTYPE html>" +
                    "<html lang=\"en\">" +
                    "<head>" +
                    "<meta charset=\"UTF-8\">" +
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                    "<title>OTP Email</title>" +
                    "<style>" +
                    "@media only screen and (max-width: 600px) {" +
                    ".container {" +
                    "width: 100% !important;" +
                    "}" +
                    "}" +
                    "</style>" +
                    "</head>" +
                    "<body style=\"font-family: Arial, sans-serif; margin: 0; padding: 0;\">" +
                    "<table role=\"presentation\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" +
                    "<tr>" +
                    "<td style=\"padding: 20px 0; text-align: center; background-color: #f2f2f2;\">" +
                    "<h1 style=\"color: #333;\">Your One-Time Password (OTP)</h1>" +
                    "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td style=\"padding: 20px 0; text-align: center;\">" +
                    "<p style=\"font-size: 18px;\">Hello " + receiverEmail + ",</p>" +
                    "<p style=\"font-size: 16px;\">Your OTP for authentication is: <strong style=\"color: #007bff;\">"
                    + OTP + "</strong></p>" +
                    "<p style=\"font-size: 16px;\">Please use this code to complete your action.</p>" +
                    "</td>" +
                    "</tr>" +
                    "</table>" +
                    "</body>" +
                    "</html>";

            helper.setText(htmlContent, true); // Set the HTML content and specify it as HTML
            mailSender.send(mimeMessage);
            return "OTP has been sent to your email";
        } catch (Exception e) {
            return "Error Occurred while Sending OTP" + e.getCause() + e.getMessage();
        }

    }

}
