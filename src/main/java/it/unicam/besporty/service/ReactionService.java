package it.unicam.besporty.service;

import it.unicam.besporty.model.Reaction;
import it.unicam.besporty.repository.ReactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ReactionService {

    @Autowired
    private ReactionRepository reactionRepository;

    public List<Reaction> findByPost(Long postId) {
        return reactionRepository.findByPost_Id(postId);
    }

    public Reaction addReaction(Reaction reaction) {
        return reactionRepository.save(reaction);
    }
}
