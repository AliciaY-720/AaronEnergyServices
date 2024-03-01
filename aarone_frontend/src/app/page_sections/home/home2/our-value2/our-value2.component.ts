import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-value2',
  templateUrl: './our-value2.component.html',
  styleUrls: ['./our-value2.component.css']
})
export class OurValue2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
