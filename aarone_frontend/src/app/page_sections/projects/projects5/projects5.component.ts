import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects5',
  templateUrl: './projects5.component.html',
  styleUrls: ['./projects5.component.css']
})
export class Projects5Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
