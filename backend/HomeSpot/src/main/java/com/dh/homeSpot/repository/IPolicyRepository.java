package com.dh.homeSpot.repository;

import com.dh.homeSpot.model.entities.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPolicyRepository extends JpaRepository<Policy, Integer> {
}
