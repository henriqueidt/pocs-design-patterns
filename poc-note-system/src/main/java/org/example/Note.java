package org.example;

import java.time.LocalDateTime;

public class Note {
    private String id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Note(String title, String content) {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.title = title;
        this.content = content;
    }

    public String print() {
        return "Title: " + title + "\n" + "Content: " + content + "\n" + "Created at: " + createdAt + "\n" + "Updated at: " + updatedAt;
    }
}
