import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects2',
  templateUrl: './projects2.component.html',
  styleUrls: ['./projects2.component.css']
})
export class Projects2Component implements OnInit {

  @Input() data: any;
  @Input() zoom: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
