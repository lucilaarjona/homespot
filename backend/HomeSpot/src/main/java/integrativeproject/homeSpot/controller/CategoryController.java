package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.service.impl.CategoryService;
import integrativeproject.homeSpot.model.dto.CategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<?> categoriesRegister(@RequestBody CategoryDTO categoryDTO){
        categoryService.create(categoryDTO);

        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping()
    public ResponseEntity<?> categoriesUpdate(@RequestBody CategoryDTO categoryDTO) {
        categoryService.update(categoryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Set<CategoryDTO>> findCategories(){

        return ResponseEntity.ok(categoryService.findAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCategoriesById(@PathVariable("id") Integer id) {
        CategoryDTO aDTO = categoryService.findById(id);
        return ResponseEntity.ok(aDTO);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> categoriesDelete(@PathVariable("id") Integer id) {
        categoryService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}





