import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-box1',
  templateUrl: './blog-box1.component.html',
  styleUrls: ['./blog-box1.component.css']
})
export class BlogBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
