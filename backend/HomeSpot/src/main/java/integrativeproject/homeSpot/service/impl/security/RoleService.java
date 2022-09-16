package integrativeproject.homeSpot.service.impl.security;

import integrativeproject.homeSpot.security.enums.RoleName;
import integrativeproject.homeSpot.model.entity.security.Role;
import integrativeproject.homeSpot.repository.security.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
//Para que todos los métodos de esta clase se ejecuten en una transacción.

public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Optional<Role> getByRoleName(RoleName roleName){

        return  roleRepository.findByRoleName(roleName);
    }

    public void save(Role role){

        roleRepository.save(role);
    }
}

