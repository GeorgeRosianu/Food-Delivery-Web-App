import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restaurant1',
  templateUrl: './restaurant1.component.html',
  styleUrls: ['./restaurant1.component.less']
})
export class Restaurant1Component implements OnInit {

  panelOpenState = false;
  durationInSeconds = 2;

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Item added to your cart!', '', {duration: this.durationInSeconds * 1000});
  }

  openSnackBar2() {
    this._snackBar.open('Order Placed!', '', {duration: this.durationInSeconds * 1000});
  }

  onCreamPuffs() {
    this.openSnackBar();
  }

  onEggTart() {
    this.openSnackBar();
  }

  onBlackForest() {
    this.openSnackBar();
  }

  onCheeseBites() {
    this.openSnackBar();
  }

  onCoconutTart() {
    this.openSnackBar();
  }

  onBerrytale() {
    this.openSnackBar();
  }

  onBorohCream() {
    this.openSnackBar();
  }

  onBoroh() {
    this.openSnackBar();
  }

  onBrioche() {
    this.openSnackBar();
  }

  onCheeseBread() {
    this.openSnackBar();
  }

  onCoffee() {
    this.openSnackBar();
  }

  onAmericano() {
    this.openSnackBar();
  }

  onTea() {
    this.openSnackBar();
  }

  onBoba() {
    this.openSnackBar();
  }

  onLatte() {
    this.openSnackBar();
  }

  onOrder() {
    this.openSnackBar2();
  }
}
