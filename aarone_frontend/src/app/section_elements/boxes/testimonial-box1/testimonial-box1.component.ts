import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-box1',
  templateUrl: './testimonial-box1.component.html',
  styleUrls: ['./testimonial-box1.component.css']
})
export class TestimonialBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
