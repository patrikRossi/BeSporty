package it.unicam.besporty.service;

import it.unicam.besporty.model.Group;
import it.unicam.besporty.model.User;
import it.unicam.besporty.repository.GroupRepository;
import it.unicam.besporty.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Group> findAll() {
        return groupRepository.findAll();
    }

    public List<Group> findPublicGroups() {
        return groupRepository.findByIsPrivateFalse();
    }

    public List<Group> findGroupsByUser(Long userId) {
        return groupRepository.findByMembers_Id(userId);
    }

    public Optional<Group> findById(Long groupId) {
        return groupRepository.findById(groupId);
    }

    public Group createGroup(Group group) {
        return groupRepository.save(group);
    }

    public void addUserToGroup(Long groupId, Long userId) {
        Group group = groupRepository.findById(groupId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        group.getMembers().add(user);
        groupRepository.save(group);
    }
}
