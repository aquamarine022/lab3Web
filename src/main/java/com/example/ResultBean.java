package com.example;

import java.util.Collections;
import java.util.List;
import java.io.Serializable;
import java.util.ArrayList;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

@Named("resultBean")
@SessionScoped
public class ResultBean implements Serializable {
    private List<Point> results = Collections.synchronizedList(new ArrayList<>());

    public List<Point> getResults() {
        return results;
    }

    public void addPoint(Point point) {
        results.add(point);
    }
}       
