import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  public version = myGlobals.version;
  
  constructor() { }

  ngOnInit() {
  }

}
