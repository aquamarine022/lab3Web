package com.example;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;

@Named("formBean")
@RequestScoped
public class FormBean {
    @Inject
    private DatabaseService databaseService; 

    @Inject
    private ResultBean resultBean;

    public void processForm(Point point) {
        databaseService.addPoint(point); 
        resultBean.addPoint(point);
    }
}
