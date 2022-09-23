package integrativeproject.homeSpot.repository.security;

import integrativeproject.homeSpot.model.entity.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


    User findByUsername(String username);
    boolean existsByUsername (String username);
    boolean existsByEmail (String email);

  /*  @Modifying
    @Query(value = "DELETE FROM product_likes WHERE user_id = :userId AND product_id = :productId", nativeQuery = true)
    void deleteLikedProduct (@Param ("userId") Integer userId, @Param("productId") Integer productId);
*/

}
