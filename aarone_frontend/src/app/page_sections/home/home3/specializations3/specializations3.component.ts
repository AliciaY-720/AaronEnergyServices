import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializations3',
  templateUrl: './specializations3.component.html',
  styleUrls: ['./specializations3.component.css']
})
export class Specializations3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
