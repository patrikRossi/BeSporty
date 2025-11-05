package it.unicam.besporty.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String mediaUrl;
    private String sport;
    private String mood;
    private int durationMinutes;
    private String visibility;
    private double latitude;
    private double longitude;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Reaction> reactions = new ArrayList<>();

    public Post() {
        this.timestamp = LocalDateTime.now();
    }

    public Post(String content, String mediaUrl, String sport, String mood, int durationMinutes, String visibility, double latitude, double longitude, User author) {
        this.content = content;
        this.mediaUrl = mediaUrl;
        this.sport = sport;
        this.mood = mood;
        this.durationMinutes = durationMinutes;
        this.visibility = visibility;
        this.latitude = latitude;
        this.longitude = longitude;
        this.author = author;
        this.timestamp = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getMediaUrl() { return mediaUrl; }
    public void setMediaUrl(String mediaUrl) { this.mediaUrl = mediaUrl; }

    public String getSport() { return sport; }
    public void setSport(String sport) { this.sport = sport; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public int getDurationMinutes() { return durationMinutes; }
    public void setDurationMinutes(int durationMinutes) { this.durationMinutes = durationMinutes; }

    public String getVisibility() { return visibility; }
    public void setVisibility(String visibility) { this.visibility = visibility; }

    public double getLatitude() { return latitude; }
    public void setLatitude(double latitude) { this.latitude = latitude; }

    public double getLongitude() { return longitude; }
    public void setLongitude(double longitude) { this.longitude = longitude; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public User getAuthor() { return author; }
    public void setAuthor(User author) { this.author = author; }

    public List<Reaction> getReactions() { return reactions; }
    public void setReactions(List<Reaction> reactions) { this.reactions = reactions; }
}
