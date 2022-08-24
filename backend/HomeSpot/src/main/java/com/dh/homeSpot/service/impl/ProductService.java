package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.PolicyDTO;
import com.dh.homeSpot.model.dto.ProductDTO;
import com.dh.homeSpot.model.entities.Feature;
import com.dh.homeSpot.model.entities.Product;
import com.dh.homeSpot.repository.IBookingRepository;
import com.dh.homeSpot.repository.IProductRepository;
import com.dh.homeSpot.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;
    @Autowired
    PolicyService policyService;
    @Autowired
    ObjectMapper objectMapper;

    @Override
    public ProductDTO create(ProductDTO productDTO) {
        PolicyDTO policyDTO = policyService.create(productDTO.getPolicy());
        productDTO.setPolicy(policyDTO);
        Product product = objectMapper.convertValue(productDTO, Product.class);

        productRepository.save(product);
        return productDTO;
    }

    @Override
    public ProductDTO findById(Integer id) {
        Optional<Product> products = productRepository.findById(id);
        ProductDTO productDTO = null;
        if (products.isPresent())
            productDTO = objectMapper.convertValue(products, ProductDTO.class);
        return productDTO;
    }

    @Override
    public void deleteById(Integer id) {
        productRepository.deleteById(id);

    }

    @Override
    public ProductDTO update(ProductDTO productDTO) {
        Product product = objectMapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
        return productDTO;
    }

    @Override
    public Set<ProductDTO> findAll() {
        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productDTO = new HashSet<>();
        for (Product product : products) {
            productDTO.add(objectMapper.convertValue(product, ProductDTO.class));

        }
        return productDTO;
    }

    @Override
    public Set<ProductDTO> findProductByCategory(String category) {
        List<Product> productList = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList) {
            if (product.getCategory().getTitle().equals(category)) {
                productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
            }
        }
        return productDTOSet;
    }

    @Override
    public Set<ProductDTO> findProductByCity(String city, String state, String country) {
        List<Product> productList = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList) {
            if (product.getCity().getName().equals(city)) {
                productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
            }
        }
        return productDTOSet;
    }

    /*@Override
    public Set<ProductDTO> getRandomProducts() {
        List<Product> productList = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList) {
            int valorEntero = Math.floor(Math.random()*(productList.size()-1+1)+M);
            if (product.getId().equals(valorEntero)) {
                productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
            }
        }
        return productDTOSet;
    }*/
}