package mytld.mycompany.myapp;

import static org.junit.Assert.*;
import org.junit.runner.RunWith;

import java.util.List;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;



import mytld.mycompany.myapp.domain.Question;
import mytld.mycompany.myapp.service.QuestionService;


@RunWith(SpringRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class DAOTest {
	
	@Autowired
	public  QuestionService service;

	Question q1 = new Question( (Integer) 1, "this is a question", "option1", "option2", "option3", "answer", "username", "uniqueID");
	Question q2 = new Question( (Integer) 2, "this is a question", "option1", "option2", "option3", "answer", "username", "uniqueID");

	
	@Test
	public void addQuestionTest()
	{
		service.create(q2);
		String result = service.create(q1);
		assertEquals("successfull import", result);
		
	}
//	@Test
//	public void getQuestionsTest()
//	{
//		List<Question> questions = service.get("uniqueID");
//		assertFalse(questions.isEmpty());
//
//	}
}
