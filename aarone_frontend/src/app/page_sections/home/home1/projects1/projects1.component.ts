import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects1',
  templateUrl: './projects1.component.html',
  styleUrls: ['./projects1.component.css']
})
export class Projects1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
