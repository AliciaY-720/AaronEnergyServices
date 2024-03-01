import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-box3',
  templateUrl: './blog-box3.component.html',
  styleUrls: ['./blog-box3.component.css']
})
export class BlogBox3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
