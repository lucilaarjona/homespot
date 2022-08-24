package com.dh.homeSpot.controller;

import com.dh.homeSpot.model.dto.FeatureDTO;
import com.dh.homeSpot.service.impl.FeatureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/feature")

public class FeatureController {

    @Autowired
    FeatureService featureService;

    @PostMapping
    public ResponseEntity<?> createFeature(@RequestBody FeatureDTO featureDTO){
        featureService.create(featureDTO);
        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping
    public ResponseEntity<?> updateFeatures(@RequestBody FeatureDTO featureDTO){
        featureService.update(featureDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findFeature(@PathVariable ("id") Integer id){
        FeatureDTO featureDTO = featureService.findById(id);
        return ResponseEntity.ok(featureDTO);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFeatures(@PathVariable ("id") Integer id){
        featureService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Set<FeatureDTO>> findAllFeatures(){
        return ResponseEntity.ok(featureService.findAll());
    }

}
