package com.example.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
// @CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // @PostMapping("/validate")
    // public ResponseEntity<String> loginUser(@RequestParam("userEmail") String
    // userEmail,
    // @RequestParam("userPassword") String userPassword, HttpServletRequest
    // request) {
    // // Authentication is handled by Spring Security
    // if (this.authService.validateUser(userEmail, userPassword)) {

    // HttpSession session = request.getSession(true);
    // session.setAttribute("userEmail", userEmail);
    // if (session != null)
    // System.out.println("session created");
    // System.out.println(session);
    // System.out.println("Session id: " + session.getId());

    // String email = (String) session.getAttribute("userEmail");
    // System.out.println(email);
    // return new ResponseEntity<>("SuccessFully Logged in", HttpStatus.OK);
    // } else {
    // return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    // }
    // }

    @PostMapping("/validate")
    public ResponseEntity<String> loginUser(@RequestParam("userEmail") String userEmail,
            @RequestParam("userPassword") String userPassword, HttpServletRequest request) {
        if (this.authService.validateUser(userEmail, userPassword)) {
            HttpSession session = request.getSession(true);

            session.setAttribute("userEmail", userEmail);
            System.out.println("Session created: " + session.getId());
            return new ResponseEntity<>("Successfully Logged in", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/get-session-data")
    public ResponseEntity<String> getData(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        System.out.println("session" + session);
        if (session != null) {
            String userEmail = (String) session.getAttribute("userEmail");
            if (userEmail != null) {
                return ResponseEntity.ok(userEmail);
            } else {
                return new ResponseEntity<>("No user logged in", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("No active session found", HttpStatus.NOT_FOUND);
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
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
            return ResponseEntity.ok("Logout successful");
        } else {
            return new ResponseEntity<>("No active session found", HttpStatus.NOT_FOUND);
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