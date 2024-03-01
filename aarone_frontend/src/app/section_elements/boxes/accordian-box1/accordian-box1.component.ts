import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian-box1',
  templateUrl: './accordian-box1.component.html',
  styleUrls: ['./accordian-box1.component.css']
})
export class AccordianBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
