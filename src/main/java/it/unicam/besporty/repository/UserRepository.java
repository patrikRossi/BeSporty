package it.unicam.besporty.repository;

import it.unicam.besporty.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Cerca utente per username
    Optional<User> findByUsername(String username);

    // Cerca utente per email
    Optional<User> findByEmail(String email);

    // Cerca utente per username O email (per login flessibile)
    Optional<User> findByUsernameOrEmail(String username, String email);

    // Controlla se esiste già username (per validazione registrazione)
    boolean existsByUsername(String username);

    // Controlla se esiste già email (per validazione registrazione)
    boolean existsByEmail(String email);

    // 🔍 Recupera tutti gli utenti (utile per /api/users)
    List<User> findAll();
}
