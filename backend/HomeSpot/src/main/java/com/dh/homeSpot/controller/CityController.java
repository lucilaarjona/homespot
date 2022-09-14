package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.exceptions.ResourceNotFoundExceptions;
import com.dh.homeSpot.model.dto.CityDTO;
import com.dh.homeSpot.service.impl.CityService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/city")

public class CityController {
    private static final Logger logger = Logger.getLogger(CityController.class);

    @Autowired
    CityService cityService;

    @PostMapping
    public ResponseEntity<?> createCity(@RequestBody CityDTO city)throws BadRequestException {
        if (city != null) {
            cityService.create(city);
            logger.info("City successfully created " + city);
            return ResponseEntity.ok("City (" + city + ") created");
        } else {
            throw new BadRequestException("Error: the city was not entered correctly");
        }
    }

    @GetMapping("/{id}")
    public CityDTO getCity (@PathVariable Integer id) throws BadRequestException, ResourceNotFoundExceptions {
        if(cityService.findById(id)!=null) {
            if (id != null) {
                logger.info("Searching city with id: " + id);
                return cityService.findById(id);
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found city with id: "+id);
        }
    }


    @PutMapping
    public ResponseEntity<?> updateCity(@RequestBody CityDTO city) throws ResourceNotFoundExceptions, BadRequestException {
        if(cityService.findById(city.getId())!=null) {
            if (city.getId() != null) {
                CityDTO cityDTO = cityService.update(city);
                logger.info("City with id: " + cityDTO.getId()+" was modified successfully ");
                return ResponseEntity.ok("The city (" + city + ") was modified");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else {
            throw new ResourceNotFoundExceptions("Couldn't found city with id: "+city.getId());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCity( @PathVariable Integer id ) throws BadRequestException, ResourceNotFoundExceptions {
        if(cityService.findById(id)!=null) {
            if (id != null) {
                cityService.deleteById(id);
                logger.info("City with id: " + id +" was deleted successfully ");
                return ResponseEntity.ok("City with id: " + id +" was deleted");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found city with id: "+ id);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<CityDTO>> getAllCity() {
        Collection<CityDTO> list = cityService.findAll();
        logger.info("Getting all the cities");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}