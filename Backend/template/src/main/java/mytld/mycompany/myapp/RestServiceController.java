package mytld.mycompany.myapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import mytld.mycompany.myapp.domain.Question;
import mytld.mycompany.myapp.service.QuestionService;

@RestController
public class RestServiceController {
		
	
	@Autowired
	QuestionService questionService;
	
	
	@PostMapping("/saveQuestion")
	public ResponseEntity<?> saveQuestion(@RequestBody Question question) {
		questionService.create(question);
		return new ResponseEntity<Question>( question , HttpStatus.OK);
	}
	
	@GetMapping("/getQuestions/{uniqueID}")
	public ResponseEntity<?> getQuestion(@PathVariable String uniqueID) {
		return new ResponseEntity<List<Question>>(questionService.get(uniqueID), HttpStatus.OK);
	}
}
