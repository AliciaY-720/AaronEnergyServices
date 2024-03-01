import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-box1',
  templateUrl: './team-box1.component.html',
  styleUrls: ['./team-box1.component.css']
})
export class TeamBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
