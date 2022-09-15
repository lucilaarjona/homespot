package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.service.impl.ImageService;
import integrativeproject.homeSpot.model.dto.ImageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    ImageService imageService;


    @PostMapping()
    public ResponseEntity<?> imageRegister(@RequestBody ImageDTO imageDTO){
        imageService.create(imageDTO);

        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping()
    public ResponseEntity<?> imageUpdate(@RequestBody ImageDTO imageDTO) {
        imageService.update(imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Set<ImageDTO>> findImage(){

        return ResponseEntity.ok(imageService.findAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findImageById(@PathVariable("id") Integer id) {
        ImageDTO aDTO = imageService.findById(id);
        return ResponseEntity.ok(aDTO);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> imageDelete(@PathVariable("id") Integer id) {
        imageService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
