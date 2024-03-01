import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-carousal1-section',
  templateUrl: './project-carousal1-section.component.html',
  styleUrls: ['./project-carousal1-section.component.css']
})
export class ProjectCarousal1SectionComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
