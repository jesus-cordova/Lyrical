package com.jwt.test.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;

import com.jwt.controller.CustomerController;
import com.jwt.dao.CustomerDao;
import com.jwt.model.Customer;
import com.jwt.service.CustomerService;


@ExtendWith(MockitoExtension.class)

public class ControllerTest {

	 @InjectMocks
	 CustomerController customerController;
	
	 @Mock
	    CustomerService customerService;
	
	
	 
	
	
	@Test
	public void testFindAll() throws IOException 
    {
        // given
        Customer cust1 = new Customer(1,"timjones@email.com", "Tim", "Jones");
        Customer cust2 = new Customer(2, "alexsimmons@email.com", "Alex", "Simmons");
        
        
        List<Customer> listCustomer = new ArrayList();
        listCustomer.add(cust1);
        listCustomer.add(cust2);
        
        customerController.listCustomer(null);
        
        //assertThat();
        // then
        //assertThat(result.getEmployeeList().size()).isEqualTo(2);
         
        //assertThat(result.getEmployeeList().get(0).getFirstName())
        //                .isEqualTo(employee1.getFirstName());
         
        //assertThat(result.getEmployeeList().get(1).getFirstName())
          //              .isEqualTo(employee2.getFirstName());
    }

}
