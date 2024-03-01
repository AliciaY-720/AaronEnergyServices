import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects3',
  templateUrl: './projects3.component.html',
  styleUrls: ['./projects3.component.css']
})
export class Projects3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
