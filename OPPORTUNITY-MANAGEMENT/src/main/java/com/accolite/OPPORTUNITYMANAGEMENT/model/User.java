package com.accolite.OPPORTUNITYMANAGEMENT.model;

public class User {

	private String id;
	private String Name;
	private String email;
	public User(String id, String name, String email) {
		super();
		this.id = id;
		Name = name;
		this.email = email;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
