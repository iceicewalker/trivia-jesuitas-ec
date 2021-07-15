import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  public version = myGlobals.version;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}
