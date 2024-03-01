import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail-section',
  templateUrl: './project-detail-section.component.html',
  styleUrls: ['./project-detail-section.component.css']
})
export class ProjectDetailSectionComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
