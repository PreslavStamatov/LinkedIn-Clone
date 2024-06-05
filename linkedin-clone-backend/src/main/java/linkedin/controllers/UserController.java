package linkedin.controllers;

import linkedin.linkedinclonebackend.entities.User;
import linkedin.linkedinclonebackend.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        return userService.addUser(user);
    };
}
