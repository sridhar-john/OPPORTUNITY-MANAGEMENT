package com.accolite.OPPORTUNITYMANAGEMENT.service;

import java.util.List;
import java.util.Map;

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
		if (opportunityRepository.addOpportunity(o))
			responseString = "Inserted SucessFully";
		else {
			responseString = "Somthing went wrong not added,please try again";
		}

		return responseString;
	}

	public String updateOpportunity(opportunity o) {
		String responseString;
		if (opportunityRepository.updateOpportunity(o))
			responseString = "Updated SucessFully";
		else {
			responseString = "Somthing went wrong not updated,please try again";
		}

		return responseString;
	}

	public String deleteOpportunity(int id) throws ResourceNotFoundException {
		if (opportunityRepository.deleteOpportunity(id)) {
			return "Deleted SucessFully";
		} else {
			throw new ResourceNotFoundException("Somthing went wrong not Deleted,please try again");
		}
	}

	public boolean checkUser(String token) {

		if (opportunityRepository.checkUser(token))
			return true;
		else {
			return false;
		}

	}

	public List<Map<String, String>> getCountOpportunity() {
		List<Map<String, String>> list = null;
		list = opportunityRepository.getCountOpportunity();
		return list;
	}

	public List<Map<String, String>> getCountLocation() {
		List<Map<String, String>> list = null;
		list = opportunityRepository.getCountLocation();
		return list;
	}

	public List<Map<String, String>> getCountSkill() {
		List<Map<String, String>> list = null;
		list = opportunityRepository.getCountSkill();
		return list;
	}
}
