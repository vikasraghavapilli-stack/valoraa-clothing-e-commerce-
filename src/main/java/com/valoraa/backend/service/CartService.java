package com.valoraa.backend.service;

import com.valoraa.backend.model.Cart;
import com.valoraa.backend.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    // Add To Cart
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    // Get User Cart
    public List<Cart> getUserCart(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    // Remove Cart Item
    public void removeCartItem(Long id) {
        cartRepository.deleteById(id);
    }
}