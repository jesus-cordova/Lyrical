import { Component, OnInit } from '@angular/core';
import { quiz } from '../quiz';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizSum = 0;
  isOn = false;

  model = { q1: '0',
    q2: '0',
    q3: '0'
   };

  question1 = 'What is the chorus to U2 - Beautiful Day?';
  question2 = 'What is the correct lyric to U2 - Beautiful Day?';
  question3 = 'What is the correct lyric to U2 - Beautiful Day?';
  q1fillers : string [] = ['It\'s a beautiful day Don\'t let it get away','It\'s a beautiful gray Don\'t change it anyway','It\'s a beautiful way Don\'t eat it on the way','It\'s a beautiful way Don\'t let it get away'];
  q2fillers : string [] = ['See Kenya right in front of you','See Russia right in front of you','See India right in front of you','See China right in front of you'];
  q3fillers : string [] = ['What you don\'t wear you don\'t eat it now','What you don\'t wear you won\'t smell bad now','What you don\'t have you won\'t get now','What you don\'t have you don\'t need it now'];
  q1bool = true;
  q2bool = true;
  q3bool = true;

 
  // form:any = document.forms.quizform;

  // const radios = form.elements.quiz1;
  
  // // returns an HTMLInputElement
  // const checked = Array
  //                  .from(radios)
  //                  .find(radio => radio.checked);
  
  // const value = Array
  //                .from(radios)
  //                .find(radio => radio.checked).value;
formResult(){
// form:any = document.forms.quizform;

//   const radios = form.elements.quiz1;
  
//   // returns an HTMLInputElement
//   const checked = Array
//                    .from(radios)
//                    .find(radio => radio.checked);
  
//   const value = Array
//                  .from(radios)
//                  .find(radio => radio.checked).value;

}


  constructor() { 


    
  }

  ngOnInit(): void {
  }

}
