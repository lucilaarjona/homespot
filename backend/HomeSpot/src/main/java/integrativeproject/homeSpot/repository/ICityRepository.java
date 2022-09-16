package integrativeproject.homeSpot.repository;

import integrativeproject.homeSpot.model.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICityRepository extends JpaRepository<City, Integer> {
    @Query ("SELECT c FROM City c WHERE c.name = ?1")
    City findCitybyName(String name);

    Optional<City> findByName(String name);

}
