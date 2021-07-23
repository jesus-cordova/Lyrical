package com.jwt.test.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.jwt.model.Customer;

class CustomerTest {

	Customer mock = new Customer(4, "mock@email", "Mock", "Test");
	
	@Test
	void Idtest() {
		assertEquals(4,mock.getId());
	}
	
	@Test
	void emailTest() {
		assertEquals("mock@email",mock.getEmail());
	}
	
	@Test
	void firstNTest() {
		assertEquals("Mock",mock.getFirstName());
	}
	
	@Test
	void lastNTest() {
		assertEquals("Test",mock.getLastName());
	}
	
	@Test
	void setIdtest() {
		mock.setId(5);
		assertEquals(5,mock.getId());
	}
	
	@Test
	void setEmailtest() {
		mock.setEmail("new@email");;
		assertEquals("new@email",mock.getEmail());
	}
	
	@Test
	void setFirstNtest() {
		mock.setFirstName("Lily");
		assertEquals("Lily",mock.getFirstName());
	}
	
	@Test
	void setLastNtest() {
		mock.setLastName("Smith");
		assertEquals("Smith",mock.getLastName());
	}

}
