import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid1',
  templateUrl: './blog-grid1.component.html',
  styleUrls: ['./blog-grid1.component.css']
})
export class BlogGrid1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
