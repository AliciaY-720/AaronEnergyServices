import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IImage } from 'src/app/iimage';
import { IProject } from 'src/app/iproject';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project-detail-section',
  templateUrl: './project-detail-section.component.html',
  styleUrls: ['./project-detail-section.component.css']
})
export class ProjectDetailSectionComponent implements OnInit {

  @Input() data: any;
  project: IProject | undefined
  image_urls: String[] = []
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    // console.log(this.currentUrl);
    // let index = this.currentUrl.lastIndexOf( "/" );
    // console.log("lastIndexOf found /:" + index );
    // if (this.currentUrl[index-1] == 's') {
    //   this.nextUrl += '2'
    // }
    // console.log(this.nextUrl);



}

ngOnInit() {
  let id = 0
  this.route.queryParams.subscribe(params => {
    // Access the "id" parameter value
    id = params['id']; 
    // You can then use this.projectId to fetch data related to this project
  });
  this.projectService.getProjectById(id).subscribe(
    project => {
      this.project = project
    },
    error => {
      console.error('Error while fetching a project.', error)
    })

    this.projectService.getProjectImage(id).subscribe(
      images => {
        this.image_urls = images.map(image => image.image_url);     
      },
      error => {
        console.error('Error while fetching images.', error)
      })}

}
