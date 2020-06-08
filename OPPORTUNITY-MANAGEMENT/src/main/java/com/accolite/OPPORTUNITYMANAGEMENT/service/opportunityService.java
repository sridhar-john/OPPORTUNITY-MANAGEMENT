package com.accolite.OPPORTUNITYMANAGEMENT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.OPPORTUNITYMANAGEMENT.model.opportunity;
import com.accolite.OPPORTUNITYMANAGEMENT.repository.opportunityRepository;
import com.accolite.exception.ResourceNotFoundException;
@Service
public class opportunityService {
	
	@Autowired
	opportunityRepository opportunityRepository;

	
		/* For Opportunity */
	public List<opportunity> getAll() {
		return opportunityRepository.findAll();

	}

	public String addOpportunity(opportunity o) {
		String responseString;
		if(opportunityRepository.addOpportunity(o))
			responseString="Inserted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	public String upadateOpportunity(opportunity o) {
		String responseString;
		if(opportunityRepository.updateOpportunity(o))
			responseString="Updated SucessFully";
		else {
			responseString="Somthing went wrong not updated,please try again";
		}
		
		return responseString;
	}

	public String deleteOpportunity(int id) throws ResourceNotFoundException {
		if(opportunityRepository.deleteOpportunity(id))
			return "Deleted SucessFully";
		throw new ResourceNotFoundException("Somthing went wrong not Deleted,please try again");
	}

	
				/* for User */
	public String checkUser(String token) {
		
		String responseString;
		if(	opportunityRepository.checkUser(token))
			responseString="Login sucessfull and User is Authenticated";
		else {
			responseString="Login failed,please try again";
		}
		
		return responseString;
	}
}
