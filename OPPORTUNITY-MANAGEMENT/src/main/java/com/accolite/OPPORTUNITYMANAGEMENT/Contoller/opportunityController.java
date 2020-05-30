package com.accolite.OPPORTUNITYMANAGEMENT.Contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.OPPORTUNITYMANAGEMENT.model.opportunity;
import com.accolite.OPPORTUNITYMANAGEMENT.service.opportunityService;

@RestController
@RequestMapping("/opportunity")
public class opportunityController {

	
	@Autowired
	opportunityService opportunityService;
	
	
	@GetMapping("/")
	public List<opportunity> getAll()
	{
		return opportunityService.getAll();
	}
	
	@PostMapping("/")
	public String addEmployee(@RequestBody opportunity o)
	{
		return opportunityService.addOpportunity(o);
	}

	@PutMapping("/")
	public String updateEmployee(@RequestBody opportunity o)
	{
		return opportunityService.upadateOpportunity(o);
	}

	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable("id") int id)
	{
		return opportunityService.deleteOpportunity(id);
	}

	
}
