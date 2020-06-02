package com.accolite.OPPORTUNITYMANAGEMENT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.OPPORTUNITYMANAGEMENT.model.opportunity;
import com.accolite.OPPORTUNITYMANAGEMENT.repository.opportunityRepository;
@Service
public class opportunityService {
	
	@Autowired
	opportunityRepository opportunityRepository;

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
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	public String deleteOpportunity(int id) {
		String responseString;
		if(opportunityRepository.deleteOpportunity(id))
			responseString="Deleted SucessFully";
		else {
			responseString="Somthing went wrong not added,please try again";
		}
		
		return responseString;
	}

	
}
