package com.example;

import com.example.Utils.Checker;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;

import java.util.Date;

@Named("formBean")
@RequestScoped
public class FormBean {
    @Inject
    private Database databaseService;

    @Inject
    private ResultBean resultBean;

    public void processForm(Point point) {
        long startTime = System.nanoTime();
        boolean isHit = Checker.isHit(point.getX(), point.getY(), point.getR());
        point.setIsHit(isHit);
        point.setCreatedAt(new Date());
        long endTime = System.nanoTime();
        point.setExecutionTime(endTime - startTime);
        if (shouldUpdateAllPoints(point.getR())) {
            databaseService.updateAll(point.getR());
            resultBean.updatePoints(point.getR());
        }
        databaseService.save(point);
        resultBean.addResult(point);
    }
    private boolean shouldUpdateAllPoints(float radius) {
        return !resultBean.getResults().isEmpty() && resultBean.getResults().get(0).getR() != radius;
    }
    public void processClean() {
        databaseService.clear();
        resultBean.clearPoints();
    }
}
