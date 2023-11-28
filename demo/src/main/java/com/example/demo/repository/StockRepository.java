package com.example.demo.repository;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Retry.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {
    @Query(value = "SELECT * FROM topic t WHERE t.name = ?1 LIMIT 1", nativeQuery = true)
    Topic findByName(String topicName);

    String getStock = "SELECT * FROM stock s WHERE s.name = ?1 LIMIT 1";
    String getStockId = "SELECT * FROM stock s WHERE s.id = ?1 LIMIT 1";

    @Query(value = getStock + getStockId, nativeQuery = true)
    List<Stock> findByUsers(Long userId);
}
