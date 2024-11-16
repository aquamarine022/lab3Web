package com.example;

import java.io.Serializable;

import jakarta.enterprise.context.SessionScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@SessionScoped
public class DatabaseService implements Serializable {
    @PersistenceContext(unitName = "default")
    private EntityManager entityManager;

    @Transactional
    public void addPoint(Point point) {
        entityManager.persist(point);
    }
}
