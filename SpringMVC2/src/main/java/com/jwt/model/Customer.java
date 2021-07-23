package com.jwt.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
@Entity
@Table(name = "customer")
public class Customer implements Serializable {
	private static final long serialVersionUID = -3465813074586302847L;
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator= "CustomerProject")
	@SequenceGenerator(name="CustomerProject", sequenceName="CustomerProject_S", allocationSize=1)
	@Column(name = "id")
	 private int id;
 
	@Column(name = "email")
    private String email;
 
    @Column(name = "first_name")
    private String first_name;
 
    @Column(name = "last_name")
    private String last_name;

	public Customer(int id, String email, String first_name, String last_name) {
		// TODO Auto-generated constructor stub
	}

	public Customer() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return first_name;
	}

	public void setFirstName(String first_name) {
		this.first_name = first_name;
	}

	public String getLastName() {
		return last_name;
	}

	public void setLastName(String last_name) {
		this.last_name = last_name;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", email=" + email + ", first_name=" + first_name + ", last_name=" + last_name
				+ "]";
	}
    
}
