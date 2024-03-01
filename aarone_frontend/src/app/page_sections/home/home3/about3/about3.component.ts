import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
  styleUrls: ['./about3.component.css']
})
export class About3Component implements OnInit {

  @Input() data: any;
  @Input() title: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
