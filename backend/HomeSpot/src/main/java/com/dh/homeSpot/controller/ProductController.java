package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.exceptions.ResourceNotFoundExceptions;
import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.service.impl.ProductService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/product")

public class ProductController {
    private static final Logger logger = Logger.getLogger(ProductController.class);

    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody ProductDTO product )throws BadRequestException {
        if (product != null) {
            productService.create(product);
            logger.info("Product successfully created " + product);
            return ResponseEntity.ok("Product (" + product + ") created");
        } else {
            throw new BadRequestException("Error: the product was not entered correctly");
        }
    }

    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable Integer id) throws BadRequestException, ResourceNotFoundExceptions {
        if(productService.findById(id)!=null) {
            if (id != null) {
                logger.info("Searching product with id: " + id);
                return productService.findById(id);
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found product with id: "+id);
        }
    }


    @PutMapping
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO product ) throws ResourceNotFoundExceptions, BadRequestException {
        if(productService.findById(product.getId())!=null) {
            if (product.getId() != null) {
                ProductDTO productDTO = productService.update(product);
                logger.info("Product with id: " + productDTO.getId()+" was modified successfully ");
                return ResponseEntity.ok("The product (" + product + ") was modified");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else {
            throw new ResourceNotFoundExceptions("Couldn't found product with id: "+product.getId());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteProduct( @PathVariable Integer id ) throws BadRequestException, ResourceNotFoundExceptions {
        if(productService.findById(id)!=null) {
            if (id != null) {
                productService.deleteById(id);
                logger.info("Product with id: " + id +" was deleted successfully ");
                return ResponseEntity.ok("Product with id: " + id +" was deleted");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found product with id: "+ id);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<ProductDTO>> getAllProducts() {
        Collection<ProductDTO> list = productService.findAll();
        logger.info("Getting all the products");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    public ResponseEntity<Collection<ProductDTO>> getRandomProducts() {
        Collection<ProductDTO> list = productService.findAll();
        logger.info("Getting all the products");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}