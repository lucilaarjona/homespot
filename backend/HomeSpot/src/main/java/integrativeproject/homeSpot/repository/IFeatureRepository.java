package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature, Integer> {


}
