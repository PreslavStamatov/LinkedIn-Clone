package linkedin.linkedinclonebackend.entities.dtos;

import java.time.LocalDate;

public class PostDTO {

    private String text;

    private LocalDate date;

    public PostDTO(String text, LocalDate date) {
        this.text = text;
        this.date = date;
    }

    public PostDTO() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
