import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services4',
  templateUrl: './services4.component.html',
  styleUrls: ['./services4.component.css']
})
export class Services4Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
