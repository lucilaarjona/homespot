package integrativeproject.homeSpot.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import integrativeproject.homeSpot.model.dto.BookingDTO;
import integrativeproject.homeSpot.model.dto.CategoryDTO;
import integrativeproject.homeSpot.model.dto.PolicyDTO;
import integrativeproject.homeSpot.repository.IProductRepository;
import integrativeproject.homeSpot.service.IProductService;
import integrativeproject.homeSpot.model.dto.ProductDTO;
import integrativeproject.homeSpot.model.entity.Product;
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
    CategoryService categoryService;

    @Autowired
    ObjectMapper objectMapper;

    @Override
    public ProductDTO create(ProductDTO productDTO) {
        CategoryDTO categoryDTO = categoryService.findById(productDTO.getCategory().getId());
        productDTO.setCategory(categoryDTO);
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
    public Set<ProductDTO> findProductByCity(String city) {
        List<Product> productList = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList) {
            if (product.getCity().getName().equals(city)) {
                productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
            }
        }
        return productDTOSet;
    }

    public Set<ProductDTO> findProductByCity2(String city, String province, String country) {
        List<Product> productList = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList) {
            if (product.getCity().getName().equals(city) && product.getCity().getState().equals(province)
                    && product.getCity().getCountry().equals(country)) {
                productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
            }
        }
        return productDTOSet;
    }

    @Override
    public Set<ProductDTO> findProductByCityAndDate(String city, Date startDate, Date endDate) {
        Set<Product> productList = productRepository.findProductByCityAndDate(city, startDate, endDate);
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : productList)
            productDTOSet.add(objectMapper.convertValue(product, ProductDTO.class));
        return productDTOSet;
    }

 }




