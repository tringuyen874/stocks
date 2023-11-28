package com.example.demo.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="user_stock")
public class UserStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;


    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "stock_id", referencedColumnName = "id")
    private Stock stock;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "quantity_sell", nullable = false)
    private int quantitySell;

    @Column(name = "quantity_buy", nullable = false)
    private int quantityBuy;

    @Column(name = "time", nullable = false)
    private String time;
}
