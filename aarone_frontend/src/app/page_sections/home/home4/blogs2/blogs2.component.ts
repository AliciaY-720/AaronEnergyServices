import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs2',
  templateUrl: './blogs2.component.html',
  styleUrls: ['./blogs2.component.css']
})
export class Blogs2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
