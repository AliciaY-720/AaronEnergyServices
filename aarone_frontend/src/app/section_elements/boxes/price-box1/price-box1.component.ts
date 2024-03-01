import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-box1',
  templateUrl: './price-box1.component.html',
  styleUrls: ['./price-box1.component.css']
})
export class PriceBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
