import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {

  public version = myGlobals.version;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}
