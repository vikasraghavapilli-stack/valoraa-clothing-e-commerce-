package com.valoraa.backend.service;

import com.valoraa.backend.model.Order;
import com.valoraa.backend.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;



    // GET ALL ORDERS

    public List<Order> getAllOrders(){

        return orderRepository.findAll();

    }



    // ADD ORDER

    public Order addOrder(Order order){

        return orderRepository.save(order);

    }



    // DELETE ORDER

    public void deleteOrder(Long id){

        orderRepository.deleteById(id);

    }

}