import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  audio = new Audio('../../assets/audio/audio3.wav');
  checkStatus = false;
  
  constructor() {}

  reproducir(){
    this.audio.play();
    this.checkStatus=true;
  }

  parar(){
    this.audio.pause();
    this.checkStatus=false;
  }
}