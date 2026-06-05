package com.valoraa.backend.repository;

import com.valoraa.backend.model.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository
extends JpaRepository<Order, Long> {

}