package it.unicam.besporty.repository;

import it.unicam.besporty.model.Reaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReactionRepository extends JpaRepository<Reaction, Long> {
    List<Reaction> findByPost_Id(Long postId);
}
