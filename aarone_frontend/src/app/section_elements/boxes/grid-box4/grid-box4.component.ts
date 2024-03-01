import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-box4',
  templateUrl: './grid-box4.component.html',
  styleUrls: ['./grid-box4.component.css']
})
export class GridBox4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
