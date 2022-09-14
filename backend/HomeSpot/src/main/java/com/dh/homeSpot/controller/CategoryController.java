package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.exceptions.ResourceNotFoundExceptions;
import com.dh.homeSpot.model.dto.CategoryDTO;
import com.dh.homeSpot.service.impl.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.log4j.Logger;

import java.util.Collection;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/category")

public class CategoryController {
    private static final Logger logger = Logger.getLogger(CategoryController.class);

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
    public ResponseEntity<Collection<CategoryDTO>> getAllCategories() {
        Collection<CategoryDTO> list = categoryService.findAll();
        logger.info("Getting all the Categories");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}

