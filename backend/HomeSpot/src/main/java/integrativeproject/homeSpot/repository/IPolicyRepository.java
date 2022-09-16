package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPolicyRepository extends JpaRepository<Policy, Integer> {

}

