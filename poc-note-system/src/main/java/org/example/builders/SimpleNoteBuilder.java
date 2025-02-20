package org.example.builders;

import org.example.Note;

public class SimpleNoteBuilder implements NoteBuilder {
    private String title;
    private String content;

    @Override
    public void addTitle(String title) {
        this.title = title;
    }

    @Override
    public void addContent(String content) {
        this.content = content;
    }

    public Note getNote() {
        return new Note(title, content);
    }
}
