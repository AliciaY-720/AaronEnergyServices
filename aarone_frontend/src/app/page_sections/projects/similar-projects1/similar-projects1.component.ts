import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-projects1',
  templateUrl: './similar-projects1.component.html',
  styleUrls: ['./similar-projects1.component.css']
})
export class SimilarProjects1Component implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
