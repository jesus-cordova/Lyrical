package mytld.mycompany.myapp.dao;

import java.util.List;

import mytld.mycompany.myapp.domain.Question;

public interface QuestionDao {
		
	
	public String create(Question question);
	public List <Question> get(String uniqueID);
}