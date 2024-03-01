import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-box1',
  templateUrl: './solution-box1.component.html',
  styleUrls: ['./solution-box1.component.css']
})
export class SolutionBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
