package it.unicam.besporty.repository;

import it.unicam.besporty.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByAuthor_IdOrderByTimestampDesc(Long userId);
    List<Post> findBySportOrderByTimestampDesc(String sport);
    List<Post> findByVisibilityOrderByTimestampDesc(String visibility);
    List<Post> findAllByOrderByTimestampDesc();
}
