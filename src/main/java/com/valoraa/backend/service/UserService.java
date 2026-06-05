package com.valoraa.backend.service;

import com.valoraa.backend.model.User;
import com.valoraa.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    // ==========================
    // REGISTER USER
    // ==========================

    public User registerUser(User user){

        return userRepository.save(user);

    }



    // ==========================
    // LOGIN USER
    // ==========================

    public User loginUser(String email,
                          String password){

        List<User> users =
                userRepository.findAll();

        for(User user : users){

            if(user.getEmail().equals(email)
            && user.getPassword().equals(password)){

                return user;

            }

        }

        return null;

    }



    // ==========================
    // GET ALL USERS
    // ==========================

    public List<User> getAllUsers(){

        return userRepository.findAll();

    }



    // ==========================
    // DELETE USER
    // ==========================

    public void deleteUser(Long id){

        userRepository.deleteById(id);

    }

}