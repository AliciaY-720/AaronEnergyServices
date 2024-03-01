import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializations1',
  templateUrl: './specializations1.component.html',
  styleUrls: ['./specializations1.component.css']
})
export class Specializations1Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
