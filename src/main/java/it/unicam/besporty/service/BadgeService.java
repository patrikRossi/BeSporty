package it.unicam.besporty.service;

import it.unicam.besporty.model.Badge;
import it.unicam.besporty.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class BadgeService {

    @Autowired
    private BadgeRepository badgeRepository;

    public List<Badge> findAll() {
        return badgeRepository.findAll();
    }

    public Optional<Badge> findByName(String name) {
        return badgeRepository.findByName(name);
    }

    public Badge createBadge(Badge badge) {
        return badgeRepository.save(badge);
    }
}
