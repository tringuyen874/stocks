package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Stock;
import com.example.demo.service.StockService;

@RestController
@RequestMapping("/api")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/stocks/{id}")
    public Stock getStockById(@PathVariable long id) {
        return stockService.getStockById(id);
    }

    @PostMapping("/stocks")
    public void saveOrUpdate(@RequestBody Stock stock) {
        stockService.saveOrUpdate(stock);
    }

    @DeleteMapping("/stocks/{id}")
    public void delete(@PathVariable long id) {
        stockService.delete(id);
    }
}