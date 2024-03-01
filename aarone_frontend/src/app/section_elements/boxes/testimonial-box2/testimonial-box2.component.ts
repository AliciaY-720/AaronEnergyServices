import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-box2',
  templateUrl: './testimonial-box2.component.html',
  styleUrls: ['./testimonial-box2.component.css']
})
export class TestimonialBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
