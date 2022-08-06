package com.dh.digitalBooking.controller;

import com.dh.digitalBooking.exceptions.BadRequestException;
import com.dh.digitalBooking.exceptions.ResourceNotFoundExceptions;
import com.dh.digitalBooking.model.dto.CategoryDTO;
import com.dh.digitalBooking.service.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.log4j.Logger;

import java.util.Collection;

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
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found category with id: "+id);
        }
    }


    @PutMapping
    public ResponseEntity<?> updateCategory(@RequestBody CategoryDTO category) throws ResourceNotFoundExceptions, BadRequestException {
        if(categoryService.findById(category.getId())!=null) {
            if (category.getId() != null) {
                CategoryDTO categoryDTO = categoryService.update(category);
                logger.info("Category with id: " + categoryDTO.getId()+" was modified successfully ");
                return ResponseEntity.ok("The category (" + category + ") was modified");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else {
            throw new ResourceNotFoundExceptions("Couldn't found category with id: "+category.getId());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteCategory( @PathVariable Integer id ) throws BadRequestException, ResourceNotFoundExceptions {
        if(categoryService.findById(id)!=null) {
            if (id != null) {
                categoryService.deleteById(id);
                logger.info("Category with id: " + id +" was deleted successfully ");
                return ResponseEntity.ok("Category with id: " + id +" was deleted");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found category with id: "+ id);
        }
    }

    @GetMapping
    public Collection<CategoryDTO> getTodosOdontologos(){
        logger.info("Categories are being listed");
        return categoryService.findAll();
    }





}
