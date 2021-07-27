import { expressionType } from "@angular/compiler/src/output/output_ast";
import { Component, Input} from "@angular/core";
import { Router } from "@angular/router";
import { getLyrics, getSong } from 'genius-lyrics-api';
import { __classPrivateFieldGet } from "tslib";
import {Questions} from '../data/questions';
import { HttpClient, HttpHeaders } from "@angular/common/http"



@Component
({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
})

export class QuizComponent
{
    topSongs;
    chosenSong;
    songLyrics1;
    songLyrics2;
    songLyrics3;
    songLyrics4;
    songLyrics5;
    splityLyrics;
    randomIndex;
    secondRandomIndex;
    rndID;
    answer;
    option1;
    option2;
    option3;
    lyrics = [];
    options = {
        apiKey: 'o5QmXve5sg8T2vOS6oBwGuKce9aMibMX7_jRe6MnaKRnE9n2fIET0Au8IA7DF0of',
        title: '',
        artist: '',
        optimizeQuery: true
    };
   constructor(private router:Router, private http: HttpClient) 
   {
    this.topSongs = this.router.getCurrentNavigation().extras.state.songs;
    this.rndID = this.router.getCurrentNavigation().extras.state.rndID;
    console.log(this.topSongs);
    this.getRandomSongWithLyrics();
    setTimeout(() => {
    this.lyrics.push(this.songLyrics1);
    }, 4000);
    this.getRandomSongWithLyrics();
    setTimeout(() => {
    this.lyrics.push(this.songLyrics2);
    }, 4000);
    this.getRandomSongWithLyrics();
    setTimeout(() => {
    this.lyrics.push(this.songLyrics3);
    }, 4000);
    this.getRandomSongWithLyrics();
    setTimeout(() => {
    this.lyrics.push(this.songLyrics4);
    }, 4000);
    this.getRandomSongWithLyrics();
    setTimeout(() => {
    this.lyrics.push(this.songLyrics5);
    }, 4000);
    
    
    setTimeout(() => {
    for(let i = 0; i<this.lyrics.length; i++) 
    {
            this.lyrics[i] = this.lyrics[i].replace(/\n/g, " ");
             this.splityLyrics  = this.lyrics[i].split(" ");
             this.randomIndex = Math.floor(Math.random() * this.splityLyrics.length);
             if (this.randomIndex  + 10 > this.splityLyrics.length )
                {
                    this.randomIndex = this.randomIndex - 10;
                }
            Questions[i].question = this.splityLyrics[this.randomIndex] + ' ' + this.splityLyrics[this.randomIndex+1] + ' ' +
             this.splityLyrics[this.randomIndex+2]+ ' ' +this.splityLyrics[this.randomIndex+3]+ ' ' +this.splityLyrics[this.randomIndex+4]
             + ' ' +this.splityLyrics[this.randomIndex+5]+ ' ' +this.splityLyrics[this.randomIndex+6] ;
            Questions[i].answer = this.splityLyrics[this.randomIndex+7]+ ' ' +this.splityLyrics[this.randomIndex+8]+ ' ' +this.splityLyrics[this.randomIndex+9]
             + ' ' +this.splityLyrics[this.randomIndex+10];
             let j = 0;
             while(j<3)
             {
                this.secondRandomIndex = Math.floor(Math.random() * this.splityLyrics.length);
                if (this.secondRandomIndex >= this.randomIndex  && this.secondRandomIndex < this.randomIndex + 10 || this.secondRandomIndex + 4 > this.splityLyrics.length)
                {
                    continue;
                }
                else {
                    if(Questions[i].optionOne == '')
                    {
                        Questions[i].optionOne = this.splityLyrics[this.secondRandomIndex]+ ' ' +this.splityLyrics[this.secondRandomIndex + 1]+ ' ' +this.splityLyrics[this.secondRandomIndex + 2]
                        + ' ' +this.splityLyrics[this.secondRandomIndex + 3];
                        j++;
                        continue;
                    }
                    else if(Questions[i].optionTwo == '')
                    {
                        Questions[i].optionTwo = this.splityLyrics[this.secondRandomIndex]+ ' ' +this.splityLyrics[this.secondRandomIndex + 1]+ ' ' +this.splityLyrics[this.secondRandomIndex + 2]
                        + ' ' +this.splityLyrics[this.secondRandomIndex + 3];
                        j++;
                        continue;
                    }
                    else if(Questions[i].optionThree == '')
                    {
                        Questions[i].optionThree = this.splityLyrics[this.secondRandomIndex]+ ' ' +this.splityLyrics[this.secondRandomIndex + 1]+ ' ' +this.splityLyrics[this.secondRandomIndex + 2]
                        + ' ' +this.splityLyrics[this.secondRandomIndex + 3];
                        j++;
                        continue;
                    }
                }
             }
            console.log("looped through  here");
             this.http.post(`http://localhost:8080/java/saveQuestion`,{question: `${Questions[i].question}`,
             option1:`${Questions[i].optionOne}`,
             option2: `${Questions[i].optionTwo}`,
             option3:`${Questions[i].optionThree}`,
             answer: `${Questions[i].answer}`,
             uniqueID: `${this.rndID}`,
             useranswer:''})
             .subscribe(el => {
                console.log (el) ;
             }) ;
    }
    //post to api questions 
    //localStorage.setItem('questions', JSON.stringify(Questions));
    
    }, 4000);
    console.log(Questions);
   }

   getRandomSongWithLyrics()
   {
    this.chosenSong = this.topSongs[Math.floor(Math.random() * this.topSongs.length)];
    this.options.title = this.chosenSong.title;
    this.options.artist = this.chosenSong.artist;
    getLyrics(this.options).then((lyrics) => this.songLyrics1 = lyrics );
    this.chosenSong = this.topSongs[Math.floor(Math.random() * this.topSongs.length)];
    this.options.title = this.chosenSong.title;
    this.options.artist = this.chosenSong.artist;
    getLyrics(this.options).then((lyrics) => this.songLyrics2 = lyrics );
    this.chosenSong = this.topSongs[Math.floor(Math.random() * this.topSongs.length)];
    this.options.title = this.chosenSong.title;
    this.options.artist = this.chosenSong.artist;
    getLyrics(this.options).then((lyrics) => this.songLyrics3 = lyrics );
    this.chosenSong = this.topSongs[Math.floor(Math.random() * this.topSongs.length)];
    this.options.title = this.chosenSong.title;
    this.options.artist = this.chosenSong.artist;
    getLyrics(this.options).then((lyrics) => this.songLyrics4 = lyrics );
    this.chosenSong = this.topSongs[Math.floor(Math.random() * this.topSongs.length)];
    this.options.title = this.chosenSong.title;
    this.options.artist = this.chosenSong.artist;
    getLyrics(this.options).then((lyrics) => this.songLyrics5 = lyrics );
   }
    
}