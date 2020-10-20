package com.example.demo.Controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Service.UserService;
import com.example.demo.model.User;


@org.springframework.web.bind.annotation.RestController
public class RestController {
	@Autowired
	private UserService service;
	
	@CrossOrigin
	@PostMapping("/save-user")
	@Transactional
	
	public String registerUser(@RequestBody User user)
	{
		service.saveMyUser(user);
		
		return "Hello "+user.getFirstName()+" your registration is successfull ";
	}
	
	
	
	@GetMapping("/getAll")
	@CrossOrigin
	public Iterable<User> getAllUser()
	{
		return service.getAll();
	}
	
	@GetMapping("/delete/{user_name}")
	@Transactional
	@CrossOrigin
	public Iterable<User> delete(@PathVariable String user_name)
	{
		return service.deleteUser(user_name);
	}
	
	@CrossOrigin
	@GetMapping("/find/{username}")
	@Transactional
	
	public User findByUsername(@PathVariable String username)
	{
		return service.findUser(username);
	}
	

}
