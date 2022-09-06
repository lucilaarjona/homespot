package com.dh.homeSpot.repository.security;

import com.dh.homeSpot.model.entities.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
    boolean existsByUsername (String username);
    boolean existsByEmail (String email);
}
