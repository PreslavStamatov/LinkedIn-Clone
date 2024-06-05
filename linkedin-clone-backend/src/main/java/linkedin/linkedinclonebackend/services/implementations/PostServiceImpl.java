package linkedin.linkedinclonebackend.services.implementations;

import linkedin.linkedinclonebackend.entities.Post;
import linkedin.linkedinclonebackend.repositories.PostRepository;
import linkedin.linkedinclonebackend.services.PostService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public void addPost(Post mappedPost) {
        postRepository.saveAndFlush(mappedPost);
    }

    ;

    public Post getPostById(int id) {
        return postRepository.getReferenceById(id);
    }
}
