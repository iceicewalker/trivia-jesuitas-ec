import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {

  public version = myGlobals.version;

  constructor() { }

  ngOnInit() {
  }

}
