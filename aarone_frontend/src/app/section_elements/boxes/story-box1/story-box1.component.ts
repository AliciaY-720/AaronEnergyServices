import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-box1',
  templateUrl: './story-box1.component.html',
  styleUrls: ['./story-box1.component.css']
})
export class StoryBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
