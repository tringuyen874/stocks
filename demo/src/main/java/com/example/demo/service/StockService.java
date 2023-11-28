package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Retry.Topic;
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
        return stockRepository.findById((int) id).get();
    }

    public Topic getStockByName(String stockName) {
        return stockRepository.findByName(stockName);
    }

    public List<Stock> getAllStock() {
        return stockRepository.findAll();
    }

    public List<Stock> getStockByUsers(long userId) {
        return stockRepository.findByUsers(userId);
    }

    public void saveOrUpdate(Stock stock) {
        stockRepository.save(stock);
    }

    public void delete(long id) {
        stockRepository.deleteById((int) id);
    }
}
