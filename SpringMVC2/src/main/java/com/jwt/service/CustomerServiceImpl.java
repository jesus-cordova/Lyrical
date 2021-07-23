package com.jwt.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 
import com.jwt.dao.CustomerDao;
import com.jwt.model.Customer;
@Service
@Transactional
public class CustomerServiceImpl  implements CustomerService {
	@Autowired
    private CustomerDao customerDao;
	@Override
	 @Transactional
	public void addEmployee(Customer customer) {
		// TODO Auto-generated method stub
		customerDao.addEmployee(customer);
	}

	@Override
	 @Transactional
	public List<Customer> getAllEmployees() {
		System.out.println(customerDao.getAllEmployees());
		 return customerDao.getAllEmployees();
	}

	@Override
	 @Transactional
	public void deleteEmployee(Integer Id) {
		// TODO Auto-generated method stub
		customerDao.deleteEmployee(Id);
	}

	@Override
	 @Transactional
	public Customer updateEmployee(Customer customer) {
		// TODO Auto-generated method stub
		return customerDao.updateEmployee(customer);

	}

	@Override
	 @Transactional
	public Customer getEmployee(int id) {
		// TODO Auto-generated method stub
		return customerDao.getEmployee(id);
	}
	
	public void setEmployeeDAO(CustomerDao customerDao) {
		this.customerDao = customerDao;
		}

}
