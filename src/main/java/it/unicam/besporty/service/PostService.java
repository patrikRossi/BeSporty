package it.unicam.besporty.service;

import it.unicam.besporty.model.Post;
import it.unicam.besporty.model.User;
import it.unicam.besporty.repository.PostRepository;
import it.unicam.besporty.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public Post createPost(Post post, Long userId) {
        User author = userRepository.findById(userId).orElseThrow();
        post.setAuthor(author);
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAllByOrderByTimestampDesc();
    }

    public List<Post> getPostsByUser(Long userId) {
        return postRepository.findByAuthor_IdOrderByTimestampDesc(userId);
    }

    public List<Post> getPostsBySport(String sport) {
        return postRepository.findBySportOrderByTimestampDesc(sport);
    }

    public List<Post> getPostsByVisibility(String visibility) {
        return postRepository.findByVisibilityOrderByTimestampDesc(visibility);
    }

    public Optional<Post> getPost(Long postId) {
        return postRepository.findById(postId);
    }
}
