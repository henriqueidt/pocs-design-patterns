package org.example.builders;

import org.example.Note;

public interface NoteBuilder {
    void addTitle(String title);
    void addContent(String content);
}
