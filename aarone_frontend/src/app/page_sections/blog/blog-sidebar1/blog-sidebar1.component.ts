import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-sidebar1',
  templateUrl: './blog-sidebar1.component.html',
  styleUrls: ['./blog-sidebar1.component.css']
})
export class BlogSidebar1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
