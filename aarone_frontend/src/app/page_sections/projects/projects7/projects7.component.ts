import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects7',
  templateUrl: './projects7.component.html',
  styleUrls: ['./projects7.component.css']
})
export class Projects7Component implements OnInit {

  @Input() data: any;
  @Input() zoom: any;

  constructor() { }

  ngOnInit(): void {
  }

}
