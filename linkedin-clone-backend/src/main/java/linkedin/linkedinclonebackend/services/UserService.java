package linkedin.linkedinclonebackend.services;

import linkedin.linkedinclonebackend.entities.ApiResponse;
import linkedin.linkedinclonebackend.entities.Post;
import linkedin.linkedinclonebackend.entities.User;
import linkedin.linkedinclonebackend.entities.dtos.UserRegistrationDTO;
import linkedin.linkedinclonebackend.entities.dtos.UserSignInDTO;
import linkedin.linkedinclonebackend.repositories.UserRepository;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface UserService {
    String addUser(User user);

    Optional<User> findUserByEmail(String email);

    ResponseEntity<ApiResponse<?>> userExistsValidation(Optional<User> optionalUser, UserSignInDTO userSignInDTO);

    User addPost(Post post);

    void logOutUser(String userEmail);

    Optional<User> getSignedInUser();
}
