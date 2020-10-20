package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.User;
import com.example.demo.respository.UserRepository;





@Service
@Component
public class UserService {
@Autowired	
private UserRepository repo;
	
	
	public UserService()
	{
		
	}
	
	public UserService(UserRepository repo)
	{
		this.repo=repo;
	}
	
	public void saveMyUser(User user)
	{
	repo.save(user);	
	}
	
	public Iterable<User> getAll()
	{
		return repo.findAll();
	}
	
	
	public Iterable<User> deleteUser(String user_name)
	{
		repo.deleteByUserName(user_name);
		return repo.findAll();
	}
	
	public User findUser(String username)
	{
		return repo.findByUserName(username);
	}
	
}
