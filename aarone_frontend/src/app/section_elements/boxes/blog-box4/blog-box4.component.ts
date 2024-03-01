import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-box4',
  templateUrl: './blog-box4.component.html',
  styleUrls: ['./blog-box4.component.css']
})
export class BlogBox4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
