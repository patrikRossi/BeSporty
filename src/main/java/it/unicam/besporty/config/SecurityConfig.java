package it.unicam.besporty.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // CORS per il frontend (React) su localhost 3000/3001
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                // Disattiva CSRF per permettere test API e H2
                .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**").disable())
                // Necessario per visualizzare H2 console in un iframe
                .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
                // Autorizzazioni
                .authorizeHttpRequests(auth -> auth
                        // H2 console
                        .requestMatchers("/h2-console/**").permitAll()
                        // Auth (registrazione/login)
                        .requestMatchers("/api/auth/**").permitAll()
                        // Check-in (aperto in fase di test; poi potrai restringere)
                        .requestMatchers("/api/checkin/**").permitAll()
                        // Users lookup (login “light”, debug elenco)
                        .requestMatchers("/api/users/by-username/**").permitAll()
                        .requestMatchers("/api/users/by-email/**").permitAll()
                        .requestMatchers("/api/users").permitAll()
                        // Il resto: per ora aperto (puoi passare a authenticated() quando introduci JWT/sessioni)
                        .anyRequest().permitAll()
                )
                // Basic abilita anche endpoint semplici (utile in debug)
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    /**
     * CORS: consenti chiamate dal FE in dev (http://localhost:3000/3001).
     * Quando deployi in prod, sostituisci con il dominio reale del FE.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:3001"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
