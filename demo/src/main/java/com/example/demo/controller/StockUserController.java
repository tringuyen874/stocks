// package com.example.demo.controller;

// import com.example.demo.model.User;
// import com.example.demo.model.UserStock;
// import com.example.demo.service.UserService;
// import com.example.demo.service.UserStockService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import java.util.List;

// @RestController
// @RequestMapping("/api")
// @CrossOrigin
// public class StockUserController {
// @Autowired
// private UserStockService userStockService;

// @GetMapping("/user_stock")
// public List<UserStock> getAllUsers() {
// return userStockService.getAllUserStock();
// }

// @GetMapping("/user_stock/{id}")
// public UserStock getUserStockById(@PathVariable int id) {
// return userStockService.getUserStockById(id);
// }

// @PostMapping("/user_stock")
// public void saveOrUpdate(@RequestBody UserStock userStock) {
// userStockService.saveOrUpdate(userStock);
// }

// @DeleteMapping("/user_stock/{id}")
// public void delete(@PathVariable int id) {
// userStockService.delete(id);
// }
// }
