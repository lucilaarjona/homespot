package com.dh.homeSpot.Util;

import com.dh.homeSpot.model.entities.security.Role;
import com.dh.homeSpot.security.enums.RoleName;
import com.dh.homeSpot.service.impl.security.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
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
