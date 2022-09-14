package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.exceptions.ResourceNotFoundExceptions;
import com.dh.homeSpot.model.dto.ImageDTO;
import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.model.entities.Image;
import com.dh.homeSpot.service.impl.ImageService;
import com.dh.homeSpot.service.impl.ProductService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/image")
public class ImageController {
    private static final Logger logger = Logger.getLogger(ImageController.class);

    @Autowired
    ImageService imageService;

    @PostMapping
    public ResponseEntity<?> createImage(@RequestBody ImageDTO image)throws BadRequestException {
        if (image != null) {
            imageService.create(image);
            logger.info("Image successfully created " + image);
            return ResponseEntity.ok("Image (" + image + ") created");
        } else {
            throw new BadRequestException("Error: the image was not entered correctly");
        }
    }

    @GetMapping("/{id}")
    public ImageDTO getImage(@PathVariable Integer id) throws BadRequestException, ResourceNotFoundExceptions {
        if(imageService.findById(id)!=null) {
            if (id != null) {
                logger.info("Searching image with id: " + id);
                return imageService.findById(id);
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found image with id: "+id);
        }
    }


    @PutMapping
    public ResponseEntity<?> updateImage(@RequestBody ImageDTO image ) throws ResourceNotFoundExceptions, BadRequestException {
        if(imageService.findById(image.getId())!=null) {
            if (image.getId() != null) {
                ImageDTO imageDTO = imageService.update(image);
                logger.info("Image with id: " + imageDTO.getId()+" was modified successfully ");
                return ResponseEntity.ok("The image (" + image + ") was modified");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else {
            throw new ResourceNotFoundExceptions("Couldn't found image with id: "+image.getId());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteImage( @PathVariable Integer id ) throws BadRequestException, ResourceNotFoundExceptions {
        if(imageService.findById(id)!=null) {
            if (id != null) {
                imageService.deleteById(id);
                logger.info("Image with id: " + id +" was deleted successfully ");
                return ResponseEntity.ok("Image with id: " + id +" was deleted");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found image with id: "+ id);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<ImageDTO>> getAllImages() {
        Collection<ImageDTO> list = imageService.findAll();
        logger.info("Getting all the images");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}