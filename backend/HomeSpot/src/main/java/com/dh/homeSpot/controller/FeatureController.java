package com.dh.homeSpot.controller;

import com.dh.homeSpot.model.dto.FeatureDTO;
import com.dh.homeSpot.service.impl.FeatureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("api/features")

public class FeatureController {

    @Autowired
    FeatureService featureService;

    @PostMapping("/create")
    public ResponseEntity<?> createFeature(@RequestBody FeatureDTO featureDTO){
        featureService.create(featureDTO);
        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateFeatures(@PathVariable ("id") Integer id,@RequestBody FeatureDTO featureDTO){
        featureService.update(featureDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findFeatures(@PathVariable ("id") Integer id){
        FeatureDTO featureDTO = featureService.findById(id);
        return ResponseEntity.ok(featureDTO);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFeatures(@PathVariable ("id") Integer id){
        featureService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<Set<FeatureDTO>> findAllFeatures(){
        return ResponseEntity.ok(featureService.findAll());
    }

}
