package com.example;

import java.util.Collections;
import java.util.List;
import java.io.Serializable;
import java.util.ArrayList;

import com.example.Utils.Checker;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

@Named("resultBean")
@SessionScoped
public class ResultBean implements Serializable {
    private final List<Point> results = Collections.synchronizedList(new ArrayList<>());

    public List<Point> getResults() {
        return results;
    }

    public void addResult(Point point) {
        results.add(point);
    }
    public void updatePoints(float radius) {
        for (Point point : results) {
            point.setR(radius);
            point.setIsHit(Checker.isHit(point.getX(), point.getY(), radius));
        }
    }
    public void clearPoints() {
        results.clear();
    }
}       
