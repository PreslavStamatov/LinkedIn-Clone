package linkedin.linkedinclonebackend.entities.dtos;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class UserRegistrationDTO {
    @NotEmpty(message = "Name should not be empty!")
    private String name;

    @Email(message = "You should provide valid email!")
    @NotEmpty(message = "Email should not be empty!")
    private String email;

    @NotEmpty(message = "Password should not be empty!")
    private String password;

    private String imgSrc;

    public UserRegistrationDTO(String name, String email, String password, String imgSrc) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.imgSrc = imgSrc;
    }

    public UserRegistrationDTO() {
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
