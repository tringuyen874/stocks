package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "stock")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String stockName;

    @Column(name = "stock_price")
    private String stockPrice;

    @Column(name = "stock_quantity")
    private String stockQuantity;

    @Column(name = "buy_at")
    private String buyAt;

    @Column(name = "sell_at")
    private String sellAt;

    // @OneToMany(mappedBy = "stock",cascade = CascadeType.REMOVE)
    // @JsonIgnore
    // Set<UserStock> userStock;

    @JsonIgnore
    @ManyToMany(mappedBy = "stocks")
    private Set<User> users = new HashSet<>();

}
