import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about4',
  templateUrl: './about4.component.html',
  styleUrls: ['./about4.component.css']
})
export class About4Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
