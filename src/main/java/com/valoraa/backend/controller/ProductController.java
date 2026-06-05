package com.valoraa.backend.controller;

import com.valoraa.backend.model.Product;
import com.valoraa.backend.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Add Product API
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    // Get All Products API
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // Delete Product API
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {

        productService.deleteProduct(id);

        return "Product Deleted Successfully";
    }
    // ==========================
// GET PRODUCT BY ID
// ==========================

@GetMapping("/{id}")

public Product getProductById(@PathVariable Long id){

    return productService.getProductById(id);

}



// ==========================
// UPDATE PRODUCT
// ==========================

@PutMapping("/{id}")

public Product updateProduct(
        @PathVariable Long id,
        @RequestBody Product product){

    return productService.updateProduct(id, product);

}
}