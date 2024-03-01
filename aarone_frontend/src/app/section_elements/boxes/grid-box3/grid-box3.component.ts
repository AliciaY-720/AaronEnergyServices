import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-box3',
  templateUrl: './grid-box3.component.html',
  styleUrls: ['./grid-box3.component.css']
})
export class GridBox3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
