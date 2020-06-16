package com.accolite.OPPORTUNITYMANAGEMENT;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.accolite.OPPORTUNITYMANAGEMENT.Contoller.opportunityController;
import com.accolite.OPPORTUNITYMANAGEMENT.model.opportunity;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OpportunityManagementControllertest {

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext webApplicationContext;

	ObjectMapper om = new ObjectMapper();

	@Autowired
	private opportunityController controller;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	public static opportunity addOpportunityforTest() {
		opportunity o = new opportunity();
		o.setOpportunity_name("java dev");
		o.setExperience(3);
		o.setHiring_manager("surya");
		o.setSkill("java");
		o.setCreator("sridhar");
		o.setCreator_email("sridhar@gmail.com");
		o.setJob_location("chennai");
		o.setJoining_date("25/may/2020");
		o.setUpdated_date("2/apr/2020");

		return o;
	}

	public static opportunity updateOpportunityforTest() {

		opportunity o = new opportunity();
		o.setId(1);
		o.setOpportunity_name("java dev");
		o.setExperience(3);
		o.setHiring_manager("surya");
		o.setSkill("java");
		o.setCreator("sridhar");
		o.setCreator_email("sridhar@gmail.com");
		o.setJob_location("chennai");
		o.setJoining_date("25/may/2020");
		o.setUpdated_date("2/apr/2020");
		return o;
	}

	@Test
	public void shouldAddOpportunity() throws Exception {

		opportunity o = addOpportunityforTest();

		String jsonRequest = om.writeValueAsString(o);

		mockMvc.perform(post("/opportunity/").content(jsonRequest).contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());

	}

	@Test
	public void shouldUpdateOpportunity() throws Exception {

		opportunity o = updateOpportunityforTest();
		String jsonRequest = om.writeValueAsString(o);

		mockMvc.perform(put("/opportunity/").content(jsonRequest).contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());

	}

	@Test
	public void shouldDeleteOpportunity() throws Exception {
		mockMvc.perform(delete("/opportunity/66").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());

	}

	@Test
	public void getAllOpportunity() {

		assertEquals(33, controller.getAll(null).size());
	}

}
