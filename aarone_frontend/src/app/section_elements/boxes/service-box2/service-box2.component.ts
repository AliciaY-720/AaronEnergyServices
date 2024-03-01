import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-box2',
  templateUrl: './service-box2.component.html',
  styleUrls: ['./service-box2.component.css']
})
export class ServiceBox2Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
