package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/users/name")
    public User getUserByName(@RequestParam String userName,@RequestParam String password) {
        // String userName = user.getUserName();
        User user = userService.getUserByName(userName);
        if(user.getPassword().equals(password)){
            return user;
        }
        return null;
        // return userService.getUserByName(userName);
    }

    @PostMapping("/users")
    public void saveOrUpdate(@RequestBody User user) {
        userService.saveOrUpdate(user);
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable long id) {
        userService.delete(id);
    }
}