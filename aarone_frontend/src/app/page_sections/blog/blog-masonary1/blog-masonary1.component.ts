import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-masonary1',
  templateUrl: './blog-masonary1.component.html',
  styleUrls: ['./blog-masonary1.component.css']
})
export class BlogMasonary1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
