package integrativeproject.homeSpot.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.repository.IImageRepository;
import integrativeproject.homeSpot.service.IImageService;
import integrativeproject.homeSpot.model.dto.ImageDTO;
import integrativeproject.homeSpot.model.entity.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
@Service
public class ImageService implements IImageService {
    @Autowired
    private IImageRepository ImagesRepository;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public ImageDTO findById(Integer id) {
        Optional<Image> images = ImagesRepository.findById(id);
        ImageDTO imageDTO = null;
        if (images.isPresent())
            imageDTO = objectMapper.convertValue(images, ImageDTO.class);
        return imageDTO;
    }

    @Override
    public ImageDTO create(ImageDTO imageDTO) {
        Image image = objectMapper.convertValue(imageDTO, Image.class);
        ImagesRepository.save(image);
        return imageDTO;


    }

    @Override
    public void deleteById(Integer id) {
        ImagesRepository.deleteById(id);

    }

    @Override
    public ImageDTO update(ImageDTO imageDTO) {
        Image image = objectMapper.convertValue(imageDTO, Image.class);
        ImagesRepository.save(image);
        return imageDTO;
    }

    @Override
    public Set<ImageDTO> findAll() {
        List<Image> images = ImagesRepository.findAll();
        Set<ImageDTO> imageDTO = new HashSet<>();
        for (Image image : images) {
            imageDTO.add(objectMapper.convertValue(image, ImageDTO.class));

        }
        return imageDTO;

    }
}