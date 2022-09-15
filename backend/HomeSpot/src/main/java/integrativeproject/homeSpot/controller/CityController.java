package integrativeproject.homeSpot.controller;

import integrativeproject.homeSpot.service.impl.CityService;
import integrativeproject.homeSpot.model.dto.CityDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/city")

public class CityController {
    @Autowired
    CityService cityService;

    @PostMapping()
    public ResponseEntity<?> addCity(@RequestBody CityDTO cityDTO){
        cityService.create(cityDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @PutMapping()
    public ResponseEntity<?> updateCity(@RequestBody CityDTO cityDTO){
        cityService.update(cityDTO);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }
    @GetMapping()
    public ResponseEntity<?> findcities(){
        return ResponseEntity.ok(cityService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCitiesbyId(@PathVariable("id")Integer id){
       CityDTO cityDTO =  cityService.findById(id);
        return ResponseEntity.ok(cityDTO);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> findCitybyName (@RequestParam("name")String name){
        CityDTO cityDTO =  cityService.findByName(name);
        return ResponseEntity.ok(cityDTO);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCityById(@PathVariable("id") Integer id){
        cityService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
