import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq1',
  templateUrl: './faq1.component.html',
  styleUrls: ['./faq1.component.css']
})
export class Faq1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
