package com.jwt.test.dao;


import static org.junit.jupiter.api.Assertions.*;

import java.sql.SQLException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.jwt.dao.CustomerDaoImpl;
import com.jwt.model.Customer;


class DaoTest {
	
	
	private static CustomerDaoImpl custDao;
	Customer mock = new Customer(4, "mock@email", "Mock", "Test");
	
	@BeforeAll
	public static void initEach() {
		 custDao = new CustomerDaoImpl();
	}
	
	
	@Test
	public void addCustomerTest()
	{
		custDao.addEmployee(mock);
		assertNotNull(mock);
		
	}
	
	@Test
	public void selectAll() throws SQLException {
		
		assertNotNull(custDao.getAllEmployees());
		System.out.println(custDao.getAllEmployees());
	}
	
	@Test
	public void updateEmp() throws SQLException {
		Customer info = new Customer(4, "mock2@email", "MockFoo", "TestBar");
		
		assertNotNull(custDao.updateEmployee(info));
	}
	
	@Test
	public void selectOne() throws SQLException {
		
		assertNotNull(custDao.getEmployee(4));
		System.out.println(custDao.getEmployee(4));
	}
	
	@Test
	public void deleteOne() {
		custDao.deleteEmployee(4);
		assertNull(mock);
	}
	
	@Test
	void test() {
		fail("Not yet implemented");
	}

}
