import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list1',
  templateUrl: './blog-list1.component.html',
  styleUrls: ['./blog-list1.component.css']
})
export class BlogList1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
