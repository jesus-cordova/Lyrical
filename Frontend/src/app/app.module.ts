import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionComponent} from './question/question.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ResultComponent } from './result/result.component';
import {MatIconModule, } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes  = 
[
  {path: 'result', component:ResultComponent},
  {path:'', component:GreetingComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'test', component:QuizComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    DashboardComponent,
    QuizComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule, 
    MatProgressSpinnerModule, BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
