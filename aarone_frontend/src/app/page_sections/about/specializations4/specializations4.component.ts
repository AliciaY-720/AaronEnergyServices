import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializations4',
  templateUrl: './specializations4.component.html',
  styleUrls: ['./specializations4.component.css']
})
export class Specializations4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
