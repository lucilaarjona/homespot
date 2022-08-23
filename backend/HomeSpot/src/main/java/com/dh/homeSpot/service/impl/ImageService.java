package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.ImageDTO;
import com.dh.homeSpot.model.entities.Image;
import com.dh.homeSpot.repository.IImageRepository;
import com.dh.homeSpot.service.IImageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImageService implements IImageService {

   @Autowired
   private IImageRepository imageRepository;
   @Autowired
    ObjectMapper objectMapper;

    @Override
    public ImageDTO findById(Integer id) {
        Optional<Image> images = imageRepository.findById(id);
        ImageDTO imageDTO = null;
        if (images.isPresent())
            imageDTO = objectMapper.convertValue(images, ImageDTO.class);
        return imageDTO;
    }

    @Override
    public ImageDTO create(ImageDTO imageDTO) {
        Image image = objectMapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
        return imageDTO;
    }

    @Override
    public void deleteById(Integer id) {
        imageRepository.deleteById(id);

    }

    @Override
    public ImageDTO update(ImageDTO imageDTO) {
        Image image = objectMapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
        return imageDTO;
    }

    @Override
    public Set<ImageDTO> findAll() {
        List<Image> images = imageRepository.findAll();
        Set<ImageDTO> imageDTO = new HashSet<>();
        for (Image image : images) {
            imageDTO.add(objectMapper.convertValue(image, ImageDTO.class));

        }
        return imageDTO;
    }
}
