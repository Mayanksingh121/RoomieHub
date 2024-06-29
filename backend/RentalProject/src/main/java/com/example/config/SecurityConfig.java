// package com.example.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// // import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {
//     @Bean
//     public UserDetailsService userDetailsService() {
//         UserDetails normalUser = User.withUsername(null)
//                 .password(passwordEncoder().encode("password"))
//                 .roles("USER")
//                 .build();

//         UserDetails adminUser = User.withUsername(null)
//                 .password(passwordEncoder().encode("password"))
//                 .roles("ADMIN")
//                 .build();

//    return new InMemoryUserDetailsManager(normalUser,adminUser);

//     }

//     @Override
//     @Bean
//     protected SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//         httpSecurity
//                 .csrf().disable()
//                 .authorizeRequests()
//                 .requestMatchers("/api/auth/**")
//                 .permitAll()
//                 // .hasRole("USER")
//                 .anyRequest().authenticated()
//                 .and()
//                 .formLogin().loginPage("/login").permitAll()
//                 .and()
//                 .logout().permitAll();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }
