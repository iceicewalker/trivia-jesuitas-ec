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
  
  private score: Number = 0;
  private round: Number = 0;
  private lives = [1,2,3,4];
  private maxScore: Number = myGlobals.maxScore;
  private maxRound: Number = myGlobals.maxRound;
  private questions: any;
  private actualQuestion: [];
  private statusPlaying: boolean = true;

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
      console.log("Correcta xd");
      this.score = Number(this.score) + Number(score);
      this.loadNewQuestion();
    }else{
      if(this.lives.length > 1){
        console.error("incorrecta :(");
        this.lives.pop();
      }else{
        this.statusPlaying = false;
        this.resetGame();
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