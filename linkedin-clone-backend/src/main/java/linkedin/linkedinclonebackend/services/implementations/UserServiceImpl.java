package linkedin.linkedinclonebackend.services.implementations;
import linkedin.linkedinclonebackend.entities.ApiResponse;
import linkedin.linkedinclonebackend.entities.Post;
import linkedin.linkedinclonebackend.entities.User;
import linkedin.linkedinclonebackend.entities.dtos.UserRegistrationDTO;
import linkedin.linkedinclonebackend.entities.dtos.UserSignInDTO;
import linkedin.linkedinclonebackend.repositories.UserRepository;
import linkedin.linkedinclonebackend.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {


    private ModelMapper modelMapper;

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.modelMapper = new ModelMapper();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    };

    public User getPostById(int id) {
        return userRepository.getReferenceById(id);
    }

    @Override
    public String addUser(User user) {
         Optional<User> referenceById = userRepository.getUserByEmail(user.getEmail());
        if (referenceById.isEmpty()) {
            user.setLoggedIn(true);
            userRepository.saveAndFlush(user);
            return "success";
        } else {
            return "fail";
        }
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

    @Override
    public ResponseEntity<ApiResponse<?>> userExistsValidation(Optional<User> optionalUser, UserSignInDTO userSignInDTO) {
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(String.format("No user with email %s found!",userSignInDTO.getEmail())));
        } else {
            User user = optionalUser.get();

            String expectedPassword = user.getPassword();
            String actualPassword = userSignInDTO.getPassword();

            if (!expectedPassword.equals(actualPassword)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>("Wrong password!"));
            } else {
                user.setLoggedIn(true);
                userRepository.saveAndFlush(user);
                UserRegistrationDTO map = modelMapper.map(user, UserRegistrationDTO.class);
                return ResponseEntity.status(HttpStatus.CREATED)
                        .body(new ApiResponse<>(map, String.format("Welcome, %s !",user.getName())));
            }
        }
    }

    @Override
    public User addPost(Post post) {
        Optional<User> optionalUser = userRepository.getUserByLoggedInIsTrue();
        User loggedUser = optionalUser.get();
        loggedUser.addPost(post);
        post.setUser(loggedUser);
        userRepository.saveAndFlush(loggedUser);

        return loggedUser;
    }

    @Override
    public void logOutUser(String userEmail) {
        User user = userRepository.getUserByEmail(userEmail).get();
        user.setLoggedIn(false);
        userRepository.saveAndFlush(user);
    }

    @Override
    public Optional<User> getSignedInUser() {
        return userRepository.getUserByLoggedInIsTrue();
    }
}
