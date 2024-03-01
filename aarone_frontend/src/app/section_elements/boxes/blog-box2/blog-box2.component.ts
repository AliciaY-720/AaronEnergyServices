import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-box2',
  templateUrl: './blog-box2.component.html',
  styleUrls: ['./blog-box2.component.css']
})
export class BlogBox2Component implements OnInit {

  @Input() data: any;
  @Input() textleft: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
