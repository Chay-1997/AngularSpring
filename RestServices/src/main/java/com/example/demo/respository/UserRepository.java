package com.example.demo.respository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;



public interface UserRepository extends CrudRepository<User, Integer>{

public void deleteByUserName(String user_name);
public User findByUserName(String username);

}

