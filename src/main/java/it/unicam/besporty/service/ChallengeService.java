package it.unicam.besporty.service;

import it.unicam.besporty.model.Challenge;
import it.unicam.besporty.model.User;
import it.unicam.besporty.repository.ChallengeRepository;
import it.unicam.besporty.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ChallengeService {

    @Autowired
    private ChallengeRepository challengeRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Challenge> findAll() {
        return challengeRepository.findAll();
    }

    public List<Challenge> findByGroup(Long groupId) {
        return challengeRepository.findByGroup_Id(groupId);
    }

    public Optional<Challenge> findById(Long id) {
        return challengeRepository.findById(id);
    }

    public Challenge createChallenge(Challenge challenge) {
        return challengeRepository.save(challenge);
    }

    public void markChallengeCompleted(Long challengeId, Long userId) {
        Challenge challenge = challengeRepository.findById(challengeId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        challenge.getCompletedBy().add(user);
        challengeRepository.save(challenge);
    }
}
