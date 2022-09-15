package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.service.impl.ProductService;
import integrativeproject.homeSpot.model.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Set;

@RestController
@RequestMapping("/product")

public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping()
    public ResponseEntity<?> productRegister(@RequestBody ProductDTO productDTO) {
        productService.create(productDTO);

        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @GetMapping()
    public ResponseEntity<Set<ProductDTO>> findProducts() {

        return ResponseEntity.ok(productService.findAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        ProductDTO aDTO = productService.findById(id);

        return ResponseEntity.ok(aDTO);

    }

    @GetMapping("/city/{city}")
    public ResponseEntity<?> findProductByCity(@PathVariable("city") String city) {
        Set<ProductDTO> productDTOSet = productService.findProductByCity(city);

        return ResponseEntity.ok(productDTOSet);
    }

    @GetMapping("/country/{city}/{state}/{country}")
    public ResponseEntity<?> findProductByCity2(@PathVariable("city") String city, @PathVariable("state") String state,
                                                @PathVariable("country") String country) {
        Set<ProductDTO> productDTOSet = productService.findProductByCity2(city, state, country);

        return ResponseEntity.ok(productDTOSet);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<?> findProductByCategory(@PathVariable("category") String category) {
        Set<ProductDTO> productDTOSet = productService.findProductByCategory(category);

        return ResponseEntity.ok(productDTOSet);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable("id") Integer id) {
        productService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {
        productService.update(productDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @GetMapping("/date/{city}/{startDate}/{endDate}")
    public ResponseEntity<?>findProductByCityAndDate (@PathVariable("city") String city, @PathVariable("startDate") Date startDate, @PathVariable("endDate") Date endDate){
        Set<ProductDTO> productDTOSet = productService.findProductByCityAndDate(city, startDate, endDate);
        return ResponseEntity.ok(productDTOSet);
    }

}
