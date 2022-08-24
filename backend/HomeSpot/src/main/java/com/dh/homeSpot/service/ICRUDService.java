package com.dh.homeSpot.service;
import java.util.Set;

public interface ICRUDService <T>{

    T findById(Integer id);
    T create(T t);
    void deleteById(Integer id);
    T update (T t);
    Set<T> findAll();
}
