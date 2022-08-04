package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.model.entities.Category;
import com.dh.digitalBooking.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.log4j.Logger;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private static final Logger logger =  Logger.getLogger(CategoryController.class);

    @Autowired
    ICategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody Category category)throws BadRequestException {
        if (category!= null){
            odontologoService.crearOdontologo(odontologo);
            logger.info("Se creo el odontologo: "+odontologo);
            return ResponseEntity.ok("Odontologo ("+odontologo+") creado");
        }else {
            throw new BadRequestException("Error no se ingreso correctamente el odontologo");
        }

    }
}
