import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  countProduct = 1;
  linkImg = './../assets/img/detail/women-classic-1-4-600x384.jpg';
  index = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  subtraction(): void {
    this.countProduct--;
  }

  addition(): void {
    this.countProduct++;
  }

  changeImage1(): void {
    this.linkImg = './../assets/img/detail/women-classic-1-3-600x384.jpg';
    this.index = 1;
  }

  changeImage2(): void {
    this.linkImg = './../assets/img/detail/women-classic-1-4-600x384.jpg';
    this.index = 2;
  }

  changeImage3(): void {
    this.linkImg = './../assets/img/detail/women-classic-1-1-600x384.jpg';
    this.index = 3;
  }

  changeImage4(): void {
    this.linkImg = './../assets/img/detail/women-classic-1-600x384.jpg';
    this.index = 4;
  }

  next(): void {
    if (this.index === 1) {
      this.changeImage2();
    } else if (this.index === 2) {
      this.changeImage3();
    } else if (this.index === 3){
      this.changeImage4();
    } else {
      this.changeImage1();
    }
  }

  previous(): void {
    if (this.index === 4) {
      this.changeImage3();
    } else if (this.index === 3) {
      this.changeImage2();
    } else if (this.index === 2){
      this.changeImage1();
    } else {
      this.changeImage4();
    }
  }
}
