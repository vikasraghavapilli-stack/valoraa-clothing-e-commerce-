package com.valoraa.backend.service;

import com.valoraa.backend.model.Product;
import com.valoraa.backend.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;



    // ==========================
    // ADD PRODUCT
    // ==========================

    public Product addProduct(Product product) {

        return productRepository.save(product);

    }



    // ==========================
    // GET ALL PRODUCTS
    // ==========================

    public List<Product> getAllProducts() {

        return productRepository.findAll();

    }



    // ==========================
    // DELETE PRODUCT
    // ==========================

    public void deleteProduct(Long id) {

        productRepository.deleteById(id);

    }



    // ==========================
    // GET PRODUCT BY ID
    // ==========================

    public Product getProductById(Long id) {

        return productRepository.findById(id).orElse(null);

    }



    // ==========================
    // UPDATE PRODUCT
    // ==========================

    public Product updateProduct(Long id,
                                 Product updatedProduct) {

        Product existingProduct =
                productRepository.findById(id).orElse(null);

        if(existingProduct != null) {

            existingProduct.setName(
                    updatedProduct.getName());

            existingProduct.setCategory(
                    updatedProduct.getCategory());

            existingProduct.setPrice(
                    updatedProduct.getPrice());

            existingProduct.setImageUrl(
                    updatedProduct.getImageUrl());

            return productRepository.save(existingProduct);

        }

        return null;

    }

}