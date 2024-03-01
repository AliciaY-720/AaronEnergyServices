import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients1',
  templateUrl: './clients1.component.html',
  styleUrls: ['./clients1.component.css']
})
export class Clients1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
