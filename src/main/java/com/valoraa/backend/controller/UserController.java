package com.valoraa.backend.controller;

import com.valoraa.backend.model.User;
import com.valoraa.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")

public class UserController {

    @Autowired
    private UserService userService;



    // ==========================
    // GET ALL USERS
    // ==========================

    @GetMapping
    public List<User> getAllUsers(){

        return userService.getAllUsers();

    }



    // ==========================
    // DELETE USER
    // ==========================

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id){

        userService.deleteUser(id);

        return "User Deleted Successfully";

    }

}