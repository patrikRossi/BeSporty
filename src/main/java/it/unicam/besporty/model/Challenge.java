package it.unicam.besporty.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.*;

@Entity
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private LocalDate deadline;
    private int requiredCheckIns;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToMany
    @JoinTable(
            name = "challenge_completions",
            joinColumns = @JoinColumn(name = "challenge_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> completedBy = new HashSet<>();

    public Challenge() {}

    public Challenge(String name, String description, LocalDate deadline, int requiredCheckIns, Group group) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.requiredCheckIns = requiredCheckIns;
        this.group = group;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getDeadline() { return deadline; }
    public void setDeadline(LocalDate deadline) { this.deadline = deadline; }

    public int getRequiredCheckIns() { return requiredCheckIns; }
    public void setRequiredCheckIns(int requiredCheckIns) { this.requiredCheckIns = requiredCheckIns; }

    public Group getGroup() { return group; }
    public void setGroup(Group group) { this.group = group; }

    public Set<User> getCompletedBy() { return completedBy; }
    public void setCompletedBy(Set<User> completedBy) { this.completedBy = completedBy; }
}
