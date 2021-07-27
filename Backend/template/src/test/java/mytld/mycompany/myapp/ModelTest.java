package mytld.mycompany.myapp;

import static org.junit.Assert.*;

import org.junit.Test;

import mytld.mycompany.myapp.domain.Question;

public class ModelTest {

	Question q1 = new Question( (Integer) 1, "this is a question", "option1", "option2", "option3", "answer", "username", "uniqueID");
	
	@Test
	public void Idtest() {
		assertEquals((Integer)1, q1.getQuestionID());
	}
	
	@Test
	public void questionTest() {
		assertEquals("this is a question", q1.getQuestion());
	}
	
	@Test
	public void option1Test() {
		assertEquals("option1", q1.getOption1());
	}
	
	@Test
	public void option2Test() {
		assertEquals("option2", q1.getOption2());
	}
	
	@Test
	public void option3Test() {
		assertEquals("option3", q1.getOption3());
	}
	@Test
	public void answerTest() {
		assertEquals("answer", q1.getAnswer());
	}
	@Test
	public void uniqueIDTest() {
		assertEquals("uniqueID", q1.getUniqueID());
	}
	@Test
	public void setIdtest() {
		q1.setQuestionID((Integer) 5);
		assertEquals((Integer) 5,q1.getQuestionID());
	}
	
	@Test
	public void setQuestiontest() {
		q1.setQuestion("another question");
		assertEquals("another question",q1.getQuestion());
	}
	
	@Test
	public void setOption1test() {
		q1.setOption1("another option1");
		assertEquals("another option1",q1.getOption1());
	}
	
	@Test
	public void setOption2test() {
		q1.setOption2("another option2");
		assertEquals("another option2",q1.getOption2());
	}

	@Test
	public void setOption3test() {
		q1.setOption3("another option3");
		assertEquals("another option3",q1.getOption3());
	}
	@Test
	public void setAnswertest() {
		q1.setAnswer("another answer");
		assertEquals("another answer",q1.getAnswer());
	}
	@Test
	public void setUsernametest() {
		q1.setUseranswer("another username");
		assertEquals("another username",q1.getUseranswer());
	}
	@Test
	public void setUniqueIDtest() {
		q1.setUniqueID("another uniqueID");
		assertEquals("another uniqueID",q1.getUniqueID());
	}
}
