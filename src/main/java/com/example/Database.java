package com.example;

import java.io.Serializable;
import java.util.List;

import com.example.Utils.Checker;
import jakarta.enterprise.context.SessionScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@SessionScoped
public class Database implements Serializable {
    @PersistenceContext(unitName = "default")
    private EntityManager entityManager;

    @Transactional
    public void addPoint(Point point) {
        entityManager.persist(point);
    }
    @Transactional
    public void removePoint(Point point) {
        Point managedPoint = entityManager.find(Point.class, point.getId());
        if (managedPoint != null) {
            entityManager.remove(managedPoint);
        }
    }

    @Transactional
    public List<Point> getAllPoints() {
        TypedQuery<Point> query = entityManager.createQuery("SELECT p FROM Point p", Point.class);
        return query.getResultList();
    }
    @Transactional
    public void updateAllPoints(float radius) {
        List<Point> points = getAllPoints();
        for (Point point : points) {
            point.setR(radius);
            point.setIsHit(Checker.isHit(point.getX(), point.getY(), radius));
        }
    }
    @Transactional
    public void removeAllPoints() {
        entityManager.createQuery("DELETE FROM Point").executeUpdate();
    }
}
