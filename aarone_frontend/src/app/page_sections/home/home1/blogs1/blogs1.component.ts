import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs1',
  templateUrl: './blogs1.component.html',
  styleUrls: ['./blogs1.component.css']
})
export class Blogs1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
