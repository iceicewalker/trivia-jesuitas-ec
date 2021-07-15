import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaService } from '../services/trivia/trivia.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit, OnDestroy {
  
  public leaderBoard: any = [];
  public getLeaderBoard: any;
  constructor(private router: Router, private triviaService: TriviaService) { }

  ngOnInit() {
    this.getLeaderBoard = this.triviaService.getLeaderboard().subscribe((snap) => {
      this.leaderBoard = snap.map((rec) => {
        return rec.payload.doc.data()
      })
    });
  }
  ngOnDestroy(){
    this.getLeaderBoard.unsubscribe();
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}