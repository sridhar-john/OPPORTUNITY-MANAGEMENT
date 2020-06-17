package com.accolite.OPPORTUNITYMANAGEMENT.Contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.OPPORTUNITYMANAGEMENT.service.opportunityService;

@RestController
@RequestMapping("/opportunity")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	opportunityService opportunityService;

	@GetMapping("/users")
	@ResponseBody
	public ResponseEntity checkUser(@RequestHeader("Authorization") String token) {
		HttpStatus httpstatus = null;
		if (opportunityService.checkUser(token)) {
			httpstatus = HttpStatus.OK;
		} else {
			httpstatus = HttpStatus.NOT_FOUND;

		}

		ResponseEntity<String> responseEntity = new ResponseEntity<String>("200 ok", httpstatus);
		System.out.println(responseEntity);
		return responseEntity;

	}

}
