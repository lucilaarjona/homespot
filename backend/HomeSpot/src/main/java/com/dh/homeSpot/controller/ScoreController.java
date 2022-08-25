package com.dh.homeSpot.controller;

import com.dh.homeSpot.exceptions.BadRequestException;
import com.dh.homeSpot.exceptions.ResourceNotFoundExceptions;
import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.model.dto.ScoreDTO;
import com.dh.homeSpot.service.impl.ScoreService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Set;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/score")

public class ScoreController {
    private static final Logger logger = Logger.getLogger(ScoreController.class);

    @Autowired
    ScoreService scoreService;

    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody ScoreDTO score )throws BadRequestException {
        if (score != null) {
            scoreService.create(score);
            logger.info("Score successfully created " + score);
            return ResponseEntity.ok("Score (" + score + ") created");
        } else {
            throw new BadRequestException("Error: the score was not entered correctly");
        }
    }

        @GetMapping("/{id}")
        public ScoreDTO getScore(@PathVariable Integer id) throws BadRequestException, ResourceNotFoundExceptions {
            if(scoreService.findById(id)!=null) {
                if (id != null) {
                    logger.info("Searching score with id: " + id);
                    return scoreService.findById(id);
                }else{
                    throw new BadRequestException("Error: Request is missing id ");
                }
            }else{
                throw new ResourceNotFoundExceptions("Couldn't found score with id: "+id);
            }
        }

    @PutMapping
    public ResponseEntity<?> updateScore(@RequestBody ScoreDTO score ) throws ResourceNotFoundExceptions, BadRequestException {
        if(scoreService.findById(score.getId())!=null) {
            if (score.getId() != null) {
                ScoreDTO scoreDTO = scoreService.update(score);
                logger.info("Score with id: " + scoreDTO.getId()+" was modified successfully ");
                return ResponseEntity.ok("The score (" + score + ") was modified");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else {
            throw new ResourceNotFoundExceptions("Couldn't found product with id: "+score.getId());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteScore( @PathVariable Integer id ) throws BadRequestException, ResourceNotFoundExceptions {
        if(scoreService.findById(id)!=null) {
            if (id != null) {
                scoreService.deleteById(id);
                logger.info("Score with id: " + id +" was deleted successfully ");
                return ResponseEntity.ok("Score with id: " + id +" was deleted");
            }else{
                throw new BadRequestException("Error: Request is missing id ");
            }
        }else{
            throw new ResourceNotFoundExceptions("Couldn't found product with id: "+ id);
        }
    }

    @GetMapping
    public ResponseEntity<Collection<ScoreDTO>> getAllScores() {
        Collection<ScoreDTO> list = scoreService.findAll();
        logger.info("Getting all the scores");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


}
