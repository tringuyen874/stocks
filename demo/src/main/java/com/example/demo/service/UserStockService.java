// package com.example.demo.service;

// import com.example.demo.model.Stock;
// import com.example.demo.model.User;
// import com.example.demo.model.UserStock;
// import com.example.demo.repository.StockRepository;
// import com.example.demo.repository.UserStockRepository;
// import jakarta.persistence.EntityManager;
// import jakarta.persistence.PersistenceContext;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class UserStockService {
// @Autowired
// private UserStockRepository userStockRepository;

// @PersistenceContext
// private EntityManager entityManager;

// public List<UserStock> getAllUserStock() {
// return userStockRepository.findAll();
// }

// public UserStock getUserStockById(int id) {
// return userStockRepository.findById(id).get();
// }

// public void saveOrUpdate(UserStock userStock) {
// userStockRepository.save(userStock);
// }

// public void delete(int id) {
// userStockRepository.deleteById(id);
// }
// }
