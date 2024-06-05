package linkedin.linkedinclonebackend.controllers;

import linkedin.linkedinclonebackend.entities.Post;
import linkedin.linkedinclonebackend.entities.User;
import linkedin.linkedinclonebackend.entities.dtos.PostDTO;
import linkedin.linkedinclonebackend.services.PostService;
import linkedin.linkedinclonebackend.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/post")
@CrossOrigin
public class PostController {

    private ModelMapper modelMapper;
    private PostService postService;
    private UserService userService;

    public PostController(PostService postService, UserService userService) {
        this.modelMapper = new ModelMapper();
        this.postService = postService;
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addPost(@RequestBody PostDTO postDTO) {
        Post mappedPost = modelMapper.map(postDTO, Post.class);
        User user = userService.addPost(mappedPost);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(String.format("Post added successfully to user %s!%nThis is the user's posts:%n%s",user.getName(), user.getPosts()
                        .stream()
                        .map(post -> post.getText())
                        .collect(Collectors.joining("\n"))));
    }

    @PostMapping("/getAll/{userEmail}")
    public ResponseEntity<List<PostDTO>> fetchUserPosts(@PathVariable String userEmail) {
        List<Post> posts = userService.findUserByEmail(userEmail).get().getPosts();

        List<PostDTO> postDTOList = posts.stream().map(p -> new PostDTO(p.getText(), p.getDate())).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.CREATED).body(postDTOList);
    }
}
