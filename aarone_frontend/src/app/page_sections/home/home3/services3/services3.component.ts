import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services3',
  templateUrl: './services3.component.html',
  styleUrls: ['./services3.component.css']
})
export class Services3Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
