package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.exceptions.BadRequestException;
import com.dh.digitalBooking.exceptions.ResourceNotFoundExceptions;
import com.dh.digitalBooking.model.dto.CategoryDTO;
import com.dh.digitalBooking.model.entities.Category;
import com.dh.digitalBooking.service.ICategoryService;
import com.dh.digitalBooking.service.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.log4j.Logger;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private static final Logger logger =  Logger.getLogger(CategoryController.class);

        @Autowired
        CategoryService categoryService;

        @PostMapping
        public ResponseEntity<?> createCategory(@RequestBody CategoryDTO category)throws BadRequestException {
            if (category != null) {
                categoryService.create(category);
                logger.info("Category successfully created " + category);
                return ResponseEntity.ok("Category (" + category + ") created");
            } else {
                throw new BadRequestException("Error: the category was not entered correctly");
            }
        }

    @GetMapping("/{id}")
    public CategoryDTO getCategory (@PathVariable Integer id) throws BadRequestException, ResourceNotFoundExceptions {
        if(categoryService.findById(id)!=null) {
            if (id != null) {
                logger.info("Searching category with id: " + id);
                return categoryService.findById(id);
            }else{
                throw new BadRequestException("Error: Category does not was delete");
            }
        }else{
            throw new ResourceNotFoundExceptions("No existe el odontologo con el id: "+id);
        }
    }





}
