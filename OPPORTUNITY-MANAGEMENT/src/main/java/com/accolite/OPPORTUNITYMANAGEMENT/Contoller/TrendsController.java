package com.accolite.OPPORTUNITYMANAGEMENT.Contoller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.OPPORTUNITYMANAGEMENT.service.opportunityService;

@RestController
@RequestMapping("/opportunity")
@CrossOrigin(origins = "*")
public class TrendsController {

	@Autowired
	opportunityService opportunityService;

	@GetMapping(path = "/trends/oppcount")
	@ResponseBody
	public List<Map<String, String>> getAllOpportunity() {
		List<Map<String, String>> list = null;
		list = opportunityService.getCountOpportunity();
		return list;
	}

	@GetMapping(path = "/trends/locationcount")
	@ResponseBody
	public List<Map<String, String>> getAllLocation() {
		List<Map<String, String>> list = null;
		list = opportunityService.getCountLocation();
		return list;
	}

	@GetMapping(path = "/trends/skillcount")
	@ResponseBody
	public List<Map<String, String>> getAllSkill() {
		List<Map<String, String>> list = null;
		list = opportunityService.getCountSkill();
		return list;
	}
}
