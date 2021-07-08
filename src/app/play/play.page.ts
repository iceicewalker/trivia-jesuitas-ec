import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.resetGame();
    this.router.navigate(['/home']);
  }

  resetGame(){
    
  }
}
