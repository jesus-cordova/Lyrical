package com.jwt.controller;
import java.io.IOException;
import java.util.List;
 
import javax.servlet.http.HttpServletRequest;
 
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.jwt.model.Customer;
import com.jwt.service.CustomerService;
@Controller
public class CustomerController {
	 private static final Logger logger = Logger.getLogger(CustomerController.class);
	 
	    public CustomerController() {
	        System.out.println("CustomerController()");
	    }
	 
	    @Autowired
	    private CustomerService customerService;
	    
	    
	    @RequestMapping(value = "/")
	    public ModelAndView listCustomer(ModelAndView model) throws IOException {
	        List<Customer> listCustomer = customerService.getAllEmployees();
	        System.out.println(customerService.getAllEmployees());
	        model.addObject("listCustomer", listCustomer);
	        
	        model.setViewName("home");
	        return model;
	    }
	 
	    @RequestMapping(value = "/newCustomer", method = RequestMethod.GET)
	    public ModelAndView newContact(ModelAndView model) {
	        Customer customer = new Customer();
	        model.addObject("employee", customer);
	        model.setViewName("CustomerForm");
	        return model;
	    }
	 
	    @RequestMapping(value = "/saveCustomer", method = RequestMethod.POST)
	    public ModelAndView saveCustomer(@ModelAttribute Customer customer) {
	        if (customer.getId() == 0) { // if employee id is 0 then creating the
	            // employee other updating the employee
	            customerService.addEmployee(customer);
	        } else {
	            customerService.updateEmployee(customer);
	        }
	        return new ModelAndView("redirect:/");
	    }
	 
	    @RequestMapping(value = "/deleteCustomer", method = RequestMethod.GET)
	    public ModelAndView deleteCustomer(HttpServletRequest request) {
	        int customerId = Integer.parseInt(request.getParameter("id"));
	        customerService.deleteEmployee(customerId);
	        return new ModelAndView("redirect:/");
	    }
	 
	    @RequestMapping(value = "/editCustomer", method = RequestMethod.GET)
	    public ModelAndView editContact(HttpServletRequest request) {
	        int customerId = Integer.parseInt(request.getParameter("id"));
	        Customer customer = customerService.getEmployee(customerId);
	        ModelAndView model = new ModelAndView("CustomerForm");
	        model.addObject("customer", customer);
	 
	        return model;
	    }
}
