package com.example;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// вот тут короче бин, который как бы представляет нашу точку и он сразу же замаплен в бд
// но Харитонова не заценила такой подход, сказала что это не есть правильно и следует отдельно вынести
// бин для управления данными, которые вводит клиент и отдельно класс, который замаплен в бд, но как это сделать по уму
// я хз, да и она на этот момент приняла у меня

@Named("pointBean")
@RequestScoped
@Entity
@Table(name = "point")
public class Point {
    @Id 
    @GeneratedValue
    private long id;
    
    @Column(name="x", nullable = false)
    private float x;

    public Point() {}

    public Point(float x) {
        this.x = x;
    }
    public void setX(float x) {
        this.x = x;
    }
    public float getX() {
        return x;
    }
}
