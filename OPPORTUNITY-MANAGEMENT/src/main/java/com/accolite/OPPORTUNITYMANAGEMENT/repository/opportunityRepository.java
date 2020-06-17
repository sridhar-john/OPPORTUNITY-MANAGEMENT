package com.accolite.OPPORTUNITYMANAGEMENT.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.accolite.OPPORTUNITYMANAGEMENT.model.opportunity;

@Repository
public class opportunityRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;

	/* For User */

	private final String CHECK_USER = "SELECT count(*) FROM googleuser WHERE id = ?";

	/* For opportunity */

	private final String GET_ALL = "SELECT * FROM opportunity";
	private final String INSERT_OPPORTUNITY = "INSERT INTO opportunity(opportunity_name,experience,hiring_manger,skill,creator,creator_email,job_location,joining_date,updated_date) values(?,?,?,?,?,?,?,?,?)";
	private final String UPDATE_OPPORTUNITY = "UPDATE opportunity set opportunity_name=?,experience=?,hiring_manger=?,skill=?,creator=?,creator_email=?,job_location=?,joining_date=?,updated_date=? WHERE id=?";
	private final String DELETE_OPPORTUNITY = "DELETE FROM opportunity WHERE id = ?";

	/* For User */

	public boolean checkUser(String token) {
		if (jdbcTemplate.queryForObject(CHECK_USER, new Object[] { token }, Integer.class) > 0) {
			return true;
		} else {
			return false;
		}
	}

	/* For opportunity */

	private RowMapper<opportunity> rowMapper = (ResultSet rs, int rowNUM) -> {
		opportunity emp = new opportunity();
		emp.setId(rs.getInt(1));
		emp.setOpportunity_name(rs.getString(2));
		emp.setExperience(rs.getInt(3));
		emp.setHiring_manager(rs.getString(4));
		emp.setSkill(rs.getString(5));
		emp.setCreator(rs.getString(6));
		emp.setCreator_email(rs.getString(7));
		emp.setJob_location(rs.getString(8));
		emp.setJoining_date(rs.getString(9));
		emp.setUpdated_date(rs.getString(10));

		return emp;
	};

	public List<opportunity> findAll() {
		return jdbcTemplate.query(GET_ALL, rowMapper);
	}

	public boolean addOpportunity(opportunity o) {
		if (jdbcTemplate.update(INSERT_OPPORTUNITY, o.getOpportunity_name(), o.getExperience(), o.getHiring_manager(),
				o.getSkill(), o.getCreator(), o.getCreator_email(), o.getJob_location(), o.getJoining_date(),
				o.getUpdated_date()) > 0)
			return true;
		else {
			return false;
		}
	}

	public boolean updateOpportunity(opportunity o) {
		if (jdbcTemplate.update(UPDATE_OPPORTUNITY, o.getOpportunity_name(), o.getExperience(), o.getHiring_manager(),
				o.getSkill(), o.getCreator(), o.getCreator_email(), o.getJob_location(), o.getJoining_date(),
				o.getUpdated_date(), o.getId()) > 0)
			return true;
		else {
			return false;
		}
	}

	public boolean deleteOpportunity(int id) {
		if (jdbcTemplate.update(DELETE_OPPORTUNITY, id) > 0)
			return true;
		else {
			return false;
		}
	}

	public List<Map<String, String>> getCountOpportunity() {
		String Query = "SELECT opportunity_name, count(*) FROM opportunity GROUP BY opportunity_name; ";
		List<Map<String, String>> item = new ArrayList<>();
		try {
			jdbcTemplate.query(Query, new RowCallbackHandler() {
				public void processRow(ResultSet resultSet) throws SQLException {
					do {
						Map<String, String> temp = new HashMap<>();
						temp.put("name", resultSet.getString(1));
						temp.put("value", resultSet.getString(2));
						item.add(temp);
					} while (resultSet.next());
					Collections.sort(item, new Comparator<Map<String, String>>() {

						@Override
						public int compare(Map<String, String> o1, Map<String, String> o2) {
							String v1 = o1.get("name").toLowerCase();
							String v2 = o2.get("name").toLowerCase();
							return v1.compareTo(v2);
						}

					});

				}
			});
		} catch (Exception e) {

		}
		return item;
	}

	public List<Map<String, String>> getCountLocation() {
		String Query = "SELECT job_location, count(*) FROM opportunity GROUP BY job_location; ";
		List<Map<String, String>> item = new ArrayList<>();
		try {
			jdbcTemplate.query(Query, new RowCallbackHandler() {
				public void processRow(ResultSet resultSet) throws SQLException {
					do {

						Map<String, String> temp = new HashMap<>();
						temp.put("name", resultSet.getString(1));
						temp.put("value", resultSet.getString(2));
						item.add(temp);
					} while (resultSet.next());
					Collections.sort(item, new Comparator<Map<String, String>>() {

						@Override
						public int compare(Map<String, String> o1, Map<String, String> o2) {
							String v1 = o1.get("name").toLowerCase();
							String v2 = o2.get("name").toLowerCase();
							return v1.compareTo(v2);
						}

					});

				}
			});
		} catch (Exception e) {

		}
		return item;
	}

	public List<Map<String, String>> getCountSkill() {
		String Query = "SELECT skill, count(*) FROM opportunity GROUP BY skill;";
		List<Map<String, String>> item = new ArrayList<>();
		try {
			jdbcTemplate.query(Query, new RowCallbackHandler() {
				public void processRow(ResultSet resultSet) throws SQLException {
					do {

						Map<String, String> temp = new HashMap<>();
						temp.put("name", resultSet.getString(1));
						temp.put("value", resultSet.getString(2));
						System.out.println(temp);
						item.add(temp);
					} while (resultSet.next());
					Collections.sort(item, new Comparator<Map<String, String>>() {

						@Override
						public int compare(Map<String, String> o1, Map<String, String> o2) {
							String v1 = o1.get("name").toLowerCase();
							String v2 = o2.get("name").toLowerCase();
							return v1.compareTo(v2);
						}

					});

				}
			});
		} catch (Exception e) {

		}
		return item;
	}

}
