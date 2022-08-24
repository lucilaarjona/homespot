package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.FeatureDTO;
import com.dh.homeSpot.model.entities.Feature;
import com.dh.homeSpot.repository.IFeatureRepository;
import com.dh.homeSpot.service.IFeatureService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.awt.desktop.OpenFilesEvent;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class FeatureService implements IFeatureService {

    @Autowired
    private IFeatureRepository featureRepository;
    @Autowired
    ObjectMapper objectMapper;


    @Override
    public FeatureDTO findById(Integer id) {
        Optional<Feature> features = featureRepository.findById(id);
        FeatureDTO featureDTO = null;
        if (features.isPresent())
            featureDTO = objectMapper.convertValue(features, FeatureDTO.class);
        return featureDTO;
    }

    @Override
    public FeatureDTO create(FeatureDTO featureDTO) {
        Feature feature = objectMapper.convertValue(featureDTO, Feature.class);
        featureRepository.save(feature);
        return featureDTO;
    }

    @Override
    public void deleteById(Integer id) {
        featureRepository.deleteById(id);

    }

    @Override
    public FeatureDTO update(FeatureDTO featureDTO) {
        Feature feature = objectMapper.convertValue(featureDTO, Feature.class);
        featureRepository.save(feature);
        return featureDTO;
    }

    @Override
    public Set<FeatureDTO> findAll() {
        List<Feature> features = featureRepository.findAll();
        Set<FeatureDTO> featuresDTO = new HashSet<>();
        for (Feature feature : features) {
            featuresDTO.add(objectMapper.convertValue(feature, FeatureDTO.class));

        }
        return featuresDTO;
    }
}
