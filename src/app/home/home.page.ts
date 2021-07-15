import { Component } from '@angular/core';
import * as myGlobals from '../global';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public version = myGlobals.version;

  constructor() {}
}
