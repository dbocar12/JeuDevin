import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JeuDevin';
  deviation!: number;
  noOfTries!: number;
  original!: number;
  guess!: number;
  noOfTriesRestant!: number;
  buttonDisabled!: boolean;

  constructor() {
    this.initialiserJeu();
  }
  initialiserJeu() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 100) + 1);
    console.log(this.original);
    this.guess = 0;
    this.deviation = 0;
    this.noOfTriesRestant = 5;
    this.buttonDisabled = false;
  }
  verifierDevin() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
    this.noOfTriesRestant = 5 - this.noOfTries;
    if(this.noOfTriesRestant == 0 || this.deviation == 0) {
      this.buttonDisabled = true;
    }
  }
}
