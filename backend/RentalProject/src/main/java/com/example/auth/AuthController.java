package com.example.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/validate")
    public ResponseEntity<Map<String, String>> loginUser(@RequestParam("userEmail") String userEmail,
            @RequestParam("userPassword") String userPassword,
            HttpServletRequest request) {
        Map<String, String> responseMap = new HashMap<>();

        // Validate the user and generate the JWT token
        String jwtToken = authService.validateUser(userEmail, userPassword);
        System.out.println("Token" + jwtToken);
        // Add success message and token to the response map
        responseMap.put("message", "Successfully Logged in");
        responseMap.put("token", jwtToken);

        return new ResponseEntity<>(responseMap, HttpStatus.OK);



    }

    @GetMapping("/get-session-data")
    public ResponseEntity<Map<String,String>> getData(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Map<String,String> responseMap = new HashMap<String,String>();
        if (session != null) {
            String userEmail = (String) session.getAttribute("userEmail");
            if (userEmail != null) {
                responseMap.put("userEmail", userEmail);
                return ResponseEntity.ok(responseMap);
            } else {
                responseMap.put("message", "No user logged in");
                return new ResponseEntity<>(responseMap, HttpStatus.NOT_FOUND);
            }
        } else {
            responseMap.put("message", "No active session found");
            return new ResponseEntity<>(responseMap, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/check-session-status")
    public ResponseEntity<String> getSessionStatus(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        System.out.println("session" + session);
        if (session != null) {
            return ResponseEntity.ok("Session is active");
        } else {
            return new ResponseEntity<>("Session is not active", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Map<String, String> responseMap = new HashMap<String, String>();
        if (session != null) {
            responseMap.put("message", "Logout successful");
            session.invalidate();
            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("message", "No active session found");
            return new ResponseEntity<>(responseMap, HttpStatus.NOT_FOUND);
        }
    }

    // System.out.println(user.getEmail());

    // if ("user@example.com".equals(credentials.getEmail()) &&
    // "password".equals(credentials.getPassword())) {

    // session.setAttribute("userEmail", credentials.getEmail());
    // return ResponseEntity.ok("Login successful");
    // } else {
    // return ResponseEntity.status(401).body("");
    // }

    // @GetMapping("/get-session-data")
    // public ResponseEntity<String> getData(HttpServletRequest request) {
    // HttpSession session = request.getSession(false);
    // System.out.println("session: " + session);
    // if (session != null) {
    // String userEmail = (String) session.getAttribute("userEmail");
    // if (userEmail == null) {
    // System.out.println(userEmail);
    // return new ResponseEntity<>("No user logged in", HttpStatus.NOT_FOUND);
    // }
    // return ResponseEntity.ok(userEmail);
    // } else {
    // return ResponseEntity.status(404).body("No active session found");
    // }

    // }

    // @GetMapping("/check-session-status")
    // public ResponseEntity<String> getSessionStatus(HttpServletRequest request) {
    // // String msg;
    // HttpSession session = request.getSession(false);
    // System.out.println("session: " + session);
    // if (session != null) {
    // return ResponseEntity.ok("Session is active");
    // } else {
    // return ResponseEntity.status(404).body("Session is not active");
    // }
    // }

    // String msg;
    // if (this.authService.isSessionOver(request)) {
    // msg = "Session is Over";
    // } else {
    // msg = "Session is not Over";
    // }
    // System.out.println(msg);
    // return new ResponseEntity<>(msg, HttpStatus.OK);

    // @PostMapping("/logout")
    // public ResponseEntity<String> logout(HttpServletRequest request) {

    // HttpSession session = request.getSession(false);
    // String userEmail = (String) session.getAttribute("userEmail");

    // if (session != null) {
    // session.invalidate();
    // }

    // return ResponseEntity.ok("Logout successful");
    // }

}