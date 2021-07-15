import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from '../services/trivia/trivia.service';
import * as myGlobals from '../global';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  
  public score: Number = 0;
  public round: Number = 1;
  public lives = [1,2,3,4];
  //public maxScore: Number = myGlobals.maxScore;
  //public maxRound: Number = myGlobals.maxRound;
  public questions: any;
  public actualQuestion: [];
  public statusPlaying: boolean = true;
  public winner: boolean = false;
  public loser: boolean = false;

  constructor(private router: Router, private triviaService: TriviaService) { }

  ngOnInit() {
    this.questions = [];
    this.startGame();
  }
  startGame(){
    this.newGame();
    this.loadQuestions();
  }
  newGame(){
    this.score = 0;
    this.round = 0;
    this.lives = [1,2,3,4];
    this.winner = false;
    this.loser = false;
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  loadQuestions(){
    this.triviaService.getTrivia().subscribe((sub) => {
      this.questions = sub.map((question) => {
        return question.payload.doc.data();
      })
      this.loadNewQuestion();
    })
  }
  loadNewQuestion(){
    this.actualQuestion = this.questions[this.getRandomInt(0, this.questions.length)];
  }
  checkAnswer(answer, score){
    if(answer.correcta){
      if(this.round == 10){
        this.winner = true;
        this.loser = false;
      }else{
        console.log("Correcta xd");
        this.round = Number(this.round) + 1;
        this.score = Number(Number(this.score) + Number(score));
        this.loadNewQuestion();
      }
    }else{
      if(this.lives.length > 1){
        console.error("incorrecta :(");
        this.lives.pop();
      }else{
        this.winner = false;
        this.loser = true;
        this.statusPlaying = false;
      }
    }
  }
  goHome(){
    this.resetGame();
    this.router.navigate(['/home']);
  }
  resetGame(){
    this.newGame();
    this.loadNewQuestion();
  }
}