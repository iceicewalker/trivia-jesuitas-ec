import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  public version = myGlobals.version;
  
  constructor() { }

  ngOnInit() {
  }

}
