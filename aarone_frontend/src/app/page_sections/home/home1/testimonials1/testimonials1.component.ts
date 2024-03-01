import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials1',
  templateUrl: './testimonials1.component.html',
  styleUrls: ['./testimonials1.component.css']
})
export class Testimonials1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
