package linkedin.linkedinclonebackend.services;

import linkedin.linkedinclonebackend.entities.Post;

import java.util.List;

public interface PostService {

    public List<Post> getAllPosts();

    void addPost(Post mappedPost);
}
