package it.unicam.besporty.repository;

import it.unicam.besporty.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Long> {
    List<Group> findByIsPrivateFalse(); // Trova gruppi pubblici
    List<Group> findByMembers_Id(Long userId); // Trova gruppi di cui un utente è membro
}
