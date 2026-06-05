package com.valoraa.backend.controller;

import com.valoraa.backend.model.Order;
import com.valoraa.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")

public class OrderController {

    @Autowired
    private OrderService orderService;



    // GET ALL ORDERS

    @GetMapping

    public List<Order> getAllOrders(){

        return orderService.getAllOrders();

    }



    // ADD ORDER

    @PostMapping

    public Order addOrder(@RequestBody Order order){

        return orderService.addOrder(order);

    }



    // DELETE ORDER

    @DeleteMapping("/{id}")

    public String deleteOrder(@PathVariable Long id){

        orderService.deleteOrder(id);

        return "Order Deleted Successfully";

    }

}