package com.example;

import java.io.Serializable;
import java.util.List;

import com.example.Utils.Checker;
import jakarta.enterprise.context.SessionScoped;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

@SessionScoped
public class Database implements Serializable {
    private static SessionFactory sessionFactory;
    public Database()
    {

    }
    public static SessionFactory getSessionFactory()
    {
        if (sessionFactory == null) {
            try {
                Configuration configuration = new Configuration().configure("/META-INF/hibernate.cfg.xml");
                sessionFactory = configuration.buildSessionFactory();
            } catch (Exception e) {
                System.out.println("Some problems: " + e);
            }
        }
        return sessionFactory;
    }
    public Point getById(int id)
    {
        Session session = getSessionFactory().openSession();
        var res = session.get(Point.class, id);
        session.close();
        return res;
    }
    public List<Point> getAll()
    {   Session session = getSessionFactory().openSession();
        var res = session.createQuery("from Point").list();
        System.out.println("Got list of points: " + res.size());
        session.close();
        return res;
    }
    public void save(Point point) {
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(point);
        tx1.commit();
        session.close();
    }
    public void clear() {
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.createQuery("delete from Point").executeUpdate();
        tx1.commit();
        session.close();
    }
    public void updateAll(float radius) {
        List<Point> points = getAll();
        Session session = getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        for (Point point : points) {
            point.setR(radius);
            point.setIsHit(Checker.isHit(point.getX(), point.getY(), radius));
            session.saveOrUpdate(point);
        }
        tx1.commit();
        session.close();
    }
}