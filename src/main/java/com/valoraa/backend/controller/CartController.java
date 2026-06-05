package com.valoraa.backend.controller;

import com.valoraa.backend.model.Cart;
import com.valoraa.backend.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartService;

    // Add To Cart API
    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    // Get User Cart API
    @GetMapping("/{userId}")
    public List<Cart> getUserCart(@PathVariable Long userId) {
        return cartService.getUserCart(userId);
    }

    // Delete Cart Item API
    @DeleteMapping("/{id}")
    public String removeCartItem(@PathVariable Long id) {

        cartService.removeCartItem(id);

        return "Item Removed From Cart";
    }
}