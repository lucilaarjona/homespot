package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.PolicyDTO;
import com.dh.homeSpot.model.dto.ScoreDTO;
import com.dh.homeSpot.model.entities.Policy;
import com.dh.homeSpot.model.entities.Score;
import com.dh.homeSpot.repository.IScoreRepository;
import com.dh.homeSpot.service.IScoreService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ScoreService implements IScoreService {

    @Autowired
    IScoreRepository scoreRepository;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public ScoreDTO findById(Integer id) {
        Optional<Score> scores = scoreRepository.findById(id);
        ScoreDTO scoreDTO = null;
        if (scores.isPresent())
            scoreDTO = objectMapper.convertValue(scores, ScoreDTO.class);
        return scoreDTO;
        }


    @Override
    public ScoreDTO create(ScoreDTO scoreDTO) {
        Score score  = objectMapper.convertValue(scoreDTO, Score.class);
        ScoreDTO returnDTO = objectMapper.convertValue(scoreRepository.save(score), ScoreDTO.class);
        return returnDTO;

    }

    @Override
    public void deleteById(Integer id) {
        scoreRepository.deleteById(id);
    }

    @Override
    public ScoreDTO update(ScoreDTO scoreDTO) {
        Score score = objectMapper.convertValue(scoreDTO, Score.class);
        scoreRepository.save(score);
        return scoreDTO;
    }

    @Override
    public Set<ScoreDTO> findAll() {
        List<Score> scores = scoreRepository.findAll();
        Set<ScoreDTO> scoresDTO = new HashSet<>();
        for (Score score : scores) {
            scoresDTO.add(objectMapper.convertValue(score, ScoreDTO.class));
        }
        return scoresDTO;
    }
}
