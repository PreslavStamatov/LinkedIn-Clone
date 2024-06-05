package linkedin.linkedinclonebackend.controllers;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import linkedin.linkedinclonebackend.entities.ApiResponse;
import linkedin.linkedinclonebackend.entities.User;
import linkedin.linkedinclonebackend.entities.dtos.UserRegistrationDTO;
import linkedin.linkedinclonebackend.entities.dtos.UserSignInDTO;
import linkedin.linkedinclonebackend.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private Validator validator;


   private ModelMapper modelMapper;

    public UserController(UserService userService, Validator validator) {
        this.userService = userService;
        modelMapper = new ModelMapper();
        this.validator = validator;
    }


    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody UserRegistrationDTO userRegistrationDTO) {

        Set<ConstraintViolation<UserRegistrationDTO>> validate = validator.validate(userRegistrationDTO);

        if(!validate.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validate.stream().map(ConstraintViolation::getMessage).collect(Collectors.joining("\n")));
        }

        User user = modelMapper.map(userRegistrationDTO, User.class);
        String operationResult = userService.addUser(user);

        if (operationResult.equals("success")) {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("User " + userRegistrationDTO.getName() + " was added successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with email " + userRegistrationDTO.getEmail() + " already registered");
        }

    }

    @PostMapping("/signIn")
    public ResponseEntity<ApiResponse<?>> addUser(@RequestBody UserSignInDTO userSignInDTO) {
        Set<ConstraintViolation<UserSignInDTO>> validate = validator.validate(userSignInDTO);

        if(!validate.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(validate.stream().map(ConstraintViolation::getMessage).collect(Collectors.joining("\n"))));
        }

        Optional<User> optionalUser = userService.findUserByEmail(userSignInDTO.getEmail());

        return userService.userExistsValidation(optionalUser, userSignInDTO);
    }

    @PostMapping("/signOut/{userEmail}")
    public ResponseEntity<String> signOut(@PathVariable String userEmail) {
        userService.logOutUser(userEmail);
        return ResponseEntity.status(HttpStatus.CREATED).body(String.format("User with email %s signed out successfully!",userEmail));
    }
}
