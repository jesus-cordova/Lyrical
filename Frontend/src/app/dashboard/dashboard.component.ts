import { expressionType } from "@angular/compiler/src/output/output_ast";
import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
 import {Location} from '@angular/common';

    
@Component
({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent
{
    //
    song = {title: '', artist: '', imageURL: ''};
    topSongs = [];
    rndID  = '_' + Math.random().toString(36).substr(2, 17);
    //spotify api variables
    authorizationCode;
    username; 
    postSpotifyHeader = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization':'Basic ' + btoa('8669b3ba7e4649498cf157e58552bb0c' +':'+ 'a6a2d8b1a9a44afdbef1e980c342d14a')});
    getSpotifyHeader;
        constructor(private http: HttpClient, private activatedRoute:ActivatedRoute, private location:Location, private router: Router)
        {
            this.activatedRoute.queryParams.subscribe(params => {
                if (params['code'])
                {
                  this.authorizationCode = params['code'];
                
                  this.http.post(`https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${this.authorizationCode}&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fdashboard`,'', {headers: this.postSpotifyHeader})
                  .subscribe(el => {
                      
                     localStorage.setItem('token', el['access_token']);
                  }) ;
                    location.go('/dashboard');
                    setTimeout(() => { this.getTopTacks(); this.getUsername()}, 1000);                   
                }
                else
                { 
                    this.getTopTacks();       
                    this.getUsername();            
                }
            })

        }


        getTopTacks() 
        {
            this.getSpotifyHeader = new HttpHeaders ({'Authorization':'Bearer ' + localStorage.getItem('token')});
            this.http.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=5', {headers: this.getSpotifyHeader} )
                .subscribe(el =>
                    {
                        console.log(el);
                        el['items'].map(innerItem => 
                            {
                                this.song.title = innerItem.name;
                                this.song.artist = innerItem.artists[0].name;
                                this.song.imageURL = innerItem.album.images[1].url;
                                this.topSongs.push({... this.song})
                            })
                    })
        }
        getUsername() 
        {

            this.http.get('https://api.spotify.com/v1/me', {headers: this.getSpotifyHeader} )
            .subscribe(el =>
                {
                    localStorage.setItem('username', el['id']);
                    console.log(localStorage.getItem('username'));
                    this.username = localStorage.getItem("username");
                })
        }
        takeQuiz()
        {
            //make post request for a quiz with quizID and username and return the quiz ID
            this.router.navigate(['/test'], {state : {songs: this.topSongs, rndID: this.rndID }});
            console.log(this.rndID);
        }

        logout(){
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = 'https://accounts.spotify.com/en/logout';


        }
        
}