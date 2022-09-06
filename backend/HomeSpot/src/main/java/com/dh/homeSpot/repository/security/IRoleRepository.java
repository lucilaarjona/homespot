package com.dh.homeSpot.repository.security;

import com.dh.homeSpot.model.entities.security.Role;
import com.dh.homeSpot.security.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(RoleName roleName);
}
