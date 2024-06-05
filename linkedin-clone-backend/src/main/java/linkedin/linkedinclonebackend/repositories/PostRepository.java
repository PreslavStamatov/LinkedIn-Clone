package linkedin.linkedinclonebackend.repositories;

import linkedin.linkedinclonebackend.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
