import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from '../services/trivia/trivia.service';
import * as myGlobals from '../global';
import Swal from 'sweetalert2';


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
  public maxRound: Number = myGlobals.maxRound;
  public questions: any;
  public actualQuestion: [];
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
    this.round = 1;
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
  saveScore(img, score){
    Swal.fire({
      title: 'Registra tu puntuación (' + this.score + '):',
      input: 'text',
      imageUrl: img,
      imageWidth: '90%',
      inputPlaceholder: 'Ingresa tu nickname aquí',
      inputAttributes: {
        autocapitalize: 'off',
        color: "#FFFFFF"
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (nickname) => {
        return this.triviaService.saveScore({usuario: nickname, puntaje: score})
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Puntaje guardado!', 'La información se ha guardado con éxito, en caso de que tengas una puntuación alta, podrás observarla en la tabla de puntuaciones.', 'success');
        this.newGame();
      }else{
        this.newGame();
      }
    })
  }
  checkAnswer(answer, score){
    if(answer.correcta){
      this.score = Number(Number(this.score) + Number(score));
      if(this.round == 10){
        this.saveScore("../../assets/img/win.png", this.score);
      }else{
        this.round = Number(this.round) + 1;
        this.loadNewQuestion();
      }
    }else{
      if(this.lives.length > 1){
        this.lives.pop();
      }else{
        this.saveScore("../../assets/img/loss.png", this.score);
        this.newGame();
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