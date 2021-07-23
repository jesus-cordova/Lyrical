package com.jwt.dao;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.jwt.model.Customer;
@Repository
public class CustomerDaoImpl implements CustomerDao {
	  @Autowired
	    private SessionFactory sessionFactory;
	@Override
	public void addEmployee(Customer customer) {
		// TODO Auto-generated method stub
		 sessionFactory.getCurrentSession().saveOrUpdate(customer);
	}

	@Override
	public List<Customer> getAllEmployees() {
		// TODO Auto-generated method stub
		 List<Customer> customers =sessionFactory.getCurrentSession().createQuery("from Customer").list();
		 System.out.println(customers);
		 return customers;
	}

	@Override
	public void deleteEmployee(Integer id) {
		// TODO Auto-generated method stub
		Customer customer = (Customer) sessionFactory.getCurrentSession().load(
	                Customer.class, id);
	        if (null != customer) {
	            this.sessionFactory.getCurrentSession().delete(customer);
	        }	
	}

	@Override
	public Customer updateEmployee(Customer customer) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(customer);
        return customer;
	}

	@Override
	public Customer getEmployee(int id) {
		// TODO Auto-generated method stub
		 return (Customer) sessionFactory.getCurrentSession().get(
	                Customer.class, id);
		
	}

}
