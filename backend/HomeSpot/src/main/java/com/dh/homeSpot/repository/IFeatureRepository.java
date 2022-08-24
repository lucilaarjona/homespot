package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature, Integer> {
}
