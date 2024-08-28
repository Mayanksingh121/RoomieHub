
package com.example.config;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.jwt.JWTService;
import com.example.user.MyUserDetailsService;


@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private JWTService jwtService;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    // @Autowired
    // private ApplicationContext context;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String userEmail = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            try {
                userEmail = jwtService.extractUserEmail(token);
            } catch (Exception e) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid token");
                return;
            }
        }

        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.myUserDetailsService.loadUserByUsername(userEmail);
            if (jwtService.validateToken(token, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);

                // Store userEmail in the session
                HttpSession session = request.getSession();
                session.setAttribute("userEmail", userEmail);
            }
        }

        filterChain.doFilter(request, response);
    }

}
    // @Override
    // protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
    //         throws ServletException, IOException, java.io.IOException {
    //     String authHeader = request.getHeader("Authorization");
    //     String token = null;
    //     String userEmail = null;

    //     if (authHeader != null && authHeader.startsWith("Bearer ")) {
    //         token = authHeader.substring(7);
    //         userEmail = jwtService.extractUserEmail(token);
    //     }

    //     if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
    //         try {
    //             // UserDetails userDetails = myUserDetailsService.loadUserByUsername(userEmail);
    //             UserDetails userDetails = context.getBean(MyUserDetailsService.class).loadUserByUsername(userEmail);
    //             if (jwtService.validateToken(token, userDetails)) {
    //                 UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
    //                         userDetails, null, userDetails.getAuthorities());
    //                 authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    //                 SecurityContextHolder.getContext().setAuthentication(authToken);

    //                 // Store userEmail in the session
    //                 HttpSession session = request.getSession();
    //                 session.setAttribute("userEmail", userEmail);
    //             }
    //         } catch (Exception e) {
    //             // Handle exception (e.g., log it or return an error response)
    //             response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
    //             return;
    //         }
    //     }

    //     filterChain.doFilter(request, response);
    // }


// public class JWTFilter extends OncePerRequestFilter {

// @Autowired
// private JWTService jwtService;

// @Autowired
// ApplicationContext context;

// @Override
// protected void doFilterInternal(HttpServletRequest request,
// HttpServletResponse response, FilterChain filterChain) throws
// ServletException, IOException {
// // Bearer
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraWxsIiwiaWF0IjoxNzIzMTgzNzExLCJleHAiOjE3MjMxODM4MTl9.5nf7dRzKRiuGurN2B9dHh_M5xiu73ZzWPr6rbhOTTHs
// String authHeader = request.getHeader("Authorization");
// String token = null;
// String username = null;

// if (authHeader != null && authHeader.startsWith("Bearer ")) {
// token = authHeader.substring(7);
// username = jwtService.extractUserName(token);
// }

// if (username != null &&
// SecurityContextHolder.getContext().getAuthentication() == null) {
// UserDetails userDetails =
// context.getBean(MyUserDetailsService.class).loadUserByUsername(username);
// if (jwtService.validateToken(token, userDetails)) {
// UsernamePasswordAuthenticationToken authToken = new
// UsernamePasswordAuthenticationToken(userDetails, null,
// userDetails.getAuthorities());
// authToken.setDetails(new WebAuthenticationDetailsSource()
// .buildDetails(request));
// SecurityContextHolder.getContext().setAuthentication(authToken);
// }
// }

// filterChain.doFilter(request, response);
// }
// }
