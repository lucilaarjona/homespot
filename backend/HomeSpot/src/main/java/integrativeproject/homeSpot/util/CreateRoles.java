package integrativeproject.homeSpot.util;

import integrativeproject.homeSpot.model.entity.security.Role;
import integrativeproject.homeSpot.security.enums.RoleName;
import integrativeproject.homeSpot.service.impl.security.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
//CommandLineRunnery ApplicationRunner, para ejecutar fragmentos de código específicos cuando una
//aplicación se inicia por completo. Estas interfaces se llaman justo antes de que se complete run()una vez
public class CreateRoles implements CommandLineRunner {

    @Autowired
    RoleService roleService;

    @Override
    public void  run (String...args)throws  Exception{
        if (roleService.getByRoleName(RoleName.ADMIN).isEmpty())
        {
            Role adminRole = new Role(RoleName.ADMIN);
            roleService.save(adminRole);
        }

        if (roleService.getByRoleName(RoleName.USER).isEmpty())
        {
            Role userRole = new Role(RoleName.USER);
            roleService.save(userRole);
        }
    }
}
