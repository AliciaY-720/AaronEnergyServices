import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializations2',
  templateUrl: './specializations2.component.html',
  styleUrls: ['./specializations2.component.css']
})
export class Specializations2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
