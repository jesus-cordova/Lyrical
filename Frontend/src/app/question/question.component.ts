import { expressionType } from "@angular/compiler/src/output/output_ast";
import { Component, Input} from "@angular/core";
import { Router } from "@angular/router";
import { Questions } from "../data/questions";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { map} from 'rxjs/operators';



@Component
({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent
{
@Input() rndID;
importedQuestions ;
number = 0;
index  = 0;
currentQuestion;
ready = false;
totalQuestions =5; 
correctAnswered = 0;
result;
ratio;
idk;
answers =  [{answer:''}, {answer: '' }, {answer: '' }, {answer: '' }, {answer: '' }];

constructor(private router: Router ,private http: HttpClient)
{
    console.log(this.rndID)
    setTimeout(() => {  this.getQuestions();
            this.ready = true;
   }, 7000);

}

getQuestions()
{

  this.http.get(`http://localhost:8080/java/getQuestions/${this.rndID}` )
    .toPromise().then (el =>
        {
           this.importedQuestions = el;
            console.log(el);
            this.currentQuestion = this.importedQuestions[this.index]; 
            console.log(this.importedQuestions);
        }); 
}
onPreviousButton()
{
    this.index--;
    this.currentQuestion = this.importedQuestions[this.index];
    console.log('back ');
}
onNextButton()
{
    this.index++;
    this.currentQuestion = this.importedQuestions[this.index];
    console.log('forward ');
}
incrementNumber() 
{
    this.number++;
    return this.number;
}
onChange(event) 
{
    if(event.target.id == 0)
        this.answers[0].answer = event.target.value;
    else if(event.target.id == 1)
        this.answers[1].answer = event.target.value;
    else if(event.target.id == 2)
        this.answers[2].answer = event.target.value;
    else if(event.target.id == 3)
        this.answers[3].answer = event.target.value;
    else if(event.target.id == 4)
        this.answers[4].answer = event.target.value;
    console.log(this.answers);
}

    onSubmitButton() 
    { 
        for(let j = 0; j < this.importedQuestions.length; j++)
        {
           if (this.importedQuestions[j].answer == this.answers[j].answer)
                this.correctAnswered++;
        }

        this.result = 100 * (this.correctAnswered  / this.totalQuestions);
        this.ratio = this.correctAnswered + '/' + this.totalQuestions;
        this.router.navigate(['/result'], {state : {result: this.result, ratio: this.ratio }});

    }
}