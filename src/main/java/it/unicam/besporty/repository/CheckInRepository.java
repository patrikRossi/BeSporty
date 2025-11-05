package it.unicam.besporty.repository;

import it.unicam.besporty.model.CheckIn;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckInRepository extends JpaRepository<CheckIn, Long> {

    List<CheckIn> findAllByOrderByCreatedAtDesc();

    List<CheckIn> findByUser_IdOrderByCreatedAtDesc(Long userId);
}
