package com.jwt.service;

import java.util.List;

import com.jwt.model.Customer;

public interface CustomerService {
	public void addEmployee(Customer customer);
	 
    public List<Customer> getAllEmployees();
 
    public void deleteEmployee(Integer employeeId);
 
    public Customer updateEmployee(Customer customer);
 
    public Customer getEmployee(int employeeid);
}
