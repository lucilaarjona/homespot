package integrativeproject.homeSpot.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.repository.ICityRepository;
import integrativeproject.homeSpot.service.ICityService;

import integrativeproject.homeSpot.model.dto.CityDTO;
import integrativeproject.homeSpot.model.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService implements ICityService {

    @Autowired
    private ICityRepository cityRepository;
    @Autowired
    ObjectMapper objectMapper;


    @Override
    public CityDTO findById(Integer id) {
        Optional<City> cities = cityRepository.findById(id);
        CityDTO citiesDTO = null;
        if (cities.isPresent())
            citiesDTO = objectMapper.convertValue(cities, CityDTO.class);
        return citiesDTO;
    }

    @Override
    public CityDTO create(CityDTO cityDTO) {
        City city = objectMapper.convertValue(cityDTO, City.class);
        cityRepository.save(city);
        return cityDTO;
    }

    @Override
    public void deleteById(Integer id) {
        cityRepository.deleteById(id);
    }

    @Override
    public CityDTO update(CityDTO cityDTO) {
        City city = objectMapper.convertValue(cityDTO, City.class);
        cityRepository.save(city);
        return cityDTO;
    }

    @Override
    public Set<CityDTO> findAll() {
        List<City> cities = cityRepository.findAll();
        Set<CityDTO> citiesDTO = new HashSet<>();
        for(City city : cities ){
            citiesDTO.add(objectMapper.convertValue(city, CityDTO.class));
        }
        return  citiesDTO;
    }

    public CityDTO findByName(String name) {
        Optional<City> cities = cityRepository.findByName(name);
        CityDTO citiesDTO = null;
        if (cities.isPresent())
            citiesDTO = objectMapper.convertValue(cities, CityDTO.class);
        return citiesDTO;
    }
}
