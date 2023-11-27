package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Stock;
import com.example.demo.repository.StockRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public Stock getStockById(long id) {
        return stockRepository.findById(id).get();
    }

    public void saveOrUpdate(Stock stock) {
        stockRepository.save(stock);
    }

    public void delete(long id) {
        stockRepository.deleteById(id);
    }
}
