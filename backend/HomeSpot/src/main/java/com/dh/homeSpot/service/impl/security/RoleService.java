package com.dh.homeSpot.service.impl.security;

import com.dh.homeSpot.model.entities.security.Role;
import com.dh.homeSpot.security.enums.RoleName;
import com.dh.homeSpot.repository.security.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
//Para que todos los métodos de esta clase se ejecuten en una transacción.

public class RoleService {

    @Autowired
    IRoleRepository roleRepository;

    public Optional<Role> getByRoleName(RoleName roleName){

        return  roleRepository.findByRoleName(roleName);
    }

    public void save(Role role){

        roleRepository.save(role);
    }
}