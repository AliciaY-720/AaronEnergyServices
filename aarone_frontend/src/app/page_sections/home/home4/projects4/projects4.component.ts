import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects4',
  templateUrl: './projects4.component.html',
  styleUrls: ['./projects4.component.css']
})
export class Projects4Component implements OnInit {

  @Input() data: any;
  @Input() projectGrid: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
