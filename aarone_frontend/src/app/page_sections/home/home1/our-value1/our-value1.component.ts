import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-value1',
  templateUrl: './our-value1.component.html',
  styleUrls: ['./our-value1.component.css']
})
export class OurValue1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
