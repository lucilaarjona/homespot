package integrativeproject.homeSpot.service;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.Set;

public interface ICrudService<T> {

    T findById(Integer id);
    T create(T t) throws MessagingException, UnsupportedEncodingException;
    void deleteById(Integer id);
    T update(T t);
    Set<T> findAll();
}
