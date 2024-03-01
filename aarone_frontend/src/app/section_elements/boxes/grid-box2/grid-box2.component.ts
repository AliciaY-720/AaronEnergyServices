import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-box2',
  templateUrl: './grid-box2.component.html',
  styleUrls: ['./grid-box2.component.css']
})
export class GridBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
