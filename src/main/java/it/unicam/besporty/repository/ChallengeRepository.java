package it.unicam.besporty.repository;

import it.unicam.besporty.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    List<Challenge> findByGroup_Id(Long groupId);
}
