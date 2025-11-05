package it.unicam.besporty.controller;

import it.unicam.besporty.model.User;
import it.unicam.besporty.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin // (configura origini se serve)
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Endpoint per registrazione utente.
     * Attende JSON tipo:
     * {
     *   "username": "user",
     *   "email": "mail@mail.com",
     *   "password": "password123"
     * }
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> payload) {
        try {
            String username = payload.get("username");
            String email = payload.get("email");
            String password = payload.get("password");

            if (username == null || email == null || password == null) {
                return ResponseEntity.badRequest().body("Tutti i campi sono obbligatori.");
            }

            User newUser = userService.registerUser(username, email, password);
            // Non restituire la password mai!
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of("id", newUser.getId(), "username", newUser.getUsername(), "email", newUser.getEmail()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore server: " + e.getMessage());
        }
    }

    /**
     * Endpoint per login.
     * Attende JSON tipo:
     * {
     *   "usernameOrEmail": "user",
     *   "password": "password123"
     * }
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String usernameOrEmail = payload.get("usernameOrEmail");
        String password = payload.get("password");

        if (usernameOrEmail == null || password == null) {
            return ResponseEntity.badRequest().body("Tutti i campi sono obbligatori.");
        }

        Optional<User> userOpt = userService.login(usernameOrEmail, password);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Qui puoi generare un JWT in futuro se vuoi autenticazione token!
            return ResponseEntity.ok(Map.of("id", user.getId(), "username", user.getUsername(), "email", user.getEmail()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenziali non valide.");
        }
    }
}
