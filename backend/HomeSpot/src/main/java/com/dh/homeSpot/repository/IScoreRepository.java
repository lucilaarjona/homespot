package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IScoreRepository extends JpaRepository<Score, Integer> {

    @Query(value = "SELECT AVG(score) FROM Score WHERE fk_product = ?1", nativeQuery = true)
    Double findAverageScore(Long id);

}
