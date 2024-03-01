import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials2',
  templateUrl: './testimonials2.component.html',
  styleUrls: ['./testimonials2.component.css']
})
export class Testimonials2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
