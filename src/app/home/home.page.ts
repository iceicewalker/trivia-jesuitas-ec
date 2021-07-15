import { Component } from '@angular/core';
import * as myGlobals from '../global';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  audio = new Audio('../../assets/audio/audio3.wav');
  checkStatus = false;

  private version = myGlobals.version;

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
