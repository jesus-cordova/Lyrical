package mytld.mycompany.myapp.service;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mytld.mycompany.myapp.dao.QuestionDao;
import mytld.mycompany.myapp.domain.Question;

@Service
public class QuestionService implements QuestionDao {

	@Autowired 
	SessionFactory sessionFactory;
	
	


	@Override
	public String  create(Question question) {
		Session session  = sessionFactory.openSession();
		try {
			session.save(question);
			return "successfull import";
			
		}
		catch(Exception e) 
		{
			
		}
		finally {
			session.close();
		}
		return null;
	}




	@Override
	public List <Question>get(String uniqueID) {
		Query query = null;
		String hql = "";
		Session session  = sessionFactory.openSession();
		try {
			hql = "from Question q where q.uniqueID=:uniqueID";
			System.out.println("I came through " + uniqueID);
			return session.createQuery(hql).setParameter("uniqueID", uniqueID).list();
		}
		catch(Exception e) 
		{
			
		}
		finally {
			session.close();
		}
		return null;
	}
}
