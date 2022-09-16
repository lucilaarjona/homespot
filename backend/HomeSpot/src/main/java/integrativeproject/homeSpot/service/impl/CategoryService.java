package integrativeproject.homeSpot.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.repository.ICategoryRepository;
import integrativeproject.homeSpot.service.ICategoryService;
import integrativeproject.homeSpot.model.dto.CategoryDTO;
import integrativeproject.homeSpot.model.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public CategoryDTO findById(Integer id) {
        Optional<Category> category = categoryRepository.findById(id);
        CategoryDTO categoryDTO = null;
        if (category.isPresent())
            categoryDTO = objectMapper.convertValue(category, CategoryDTO.class);
        return categoryDTO;
    }

    @Override
    public CategoryDTO create(CategoryDTO categoryDTO) {
        Category category = objectMapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);
        return categoryDTO;


    }

    @Override
    public void deleteById(Integer id) {
        categoryRepository.deleteById(id);

    }

    @Override
    public CategoryDTO update(CategoryDTO categoryDTO) {
        Category category = objectMapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);
        return categoryDTO;
    }

    @Override
    public Set<CategoryDTO> findAll() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();
        for (Category category : categories) {
            categoriesDTO.add(objectMapper.convertValue(category, CategoryDTO.class));
        }
        return categoriesDTO;

    }
}
