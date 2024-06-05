package linkedin.linkedinclonebackend.entities.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class UserSignInDTO {

    @NotEmpty(message = "Email should not be empty!")
    @Email(message = "Not valid email!")
    private String email;

    @NotEmpty(message = "Password should not be empty!")
    private String password;

    private String imgSrc;

    public UserSignInDTO(String email, String password, String imgSrc) {
        this.email = email;
        this.password = password;
        this.imgSrc = imgSrc;
    }

    public UserSignInDTO() {
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
