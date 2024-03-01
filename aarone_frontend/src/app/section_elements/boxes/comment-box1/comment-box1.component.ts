import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-box1',
  templateUrl: './comment-box1.component.html',
  styleUrls: ['./comment-box1.component.css']
})
export class CommentBox1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
