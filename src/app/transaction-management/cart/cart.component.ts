import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  countProduct = 1;
  constructor() { }

  ngOnInit(): void {
  }

  subtraction(): void {
    this.countProduct--;
  }

  addition(): void {
    this.countProduct++;
  }

}
