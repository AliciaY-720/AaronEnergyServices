import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/iproject';
import { IImage } from 'src/app/iimage';
import { ProjectService } from 'src/app/project.service';
@Component({
  selector: 'app-projects4',
  templateUrl: './projects4.component.html',
  styleUrls: ['./projects4.component.css']
})
export class Projects4Component implements OnInit {

  @Input() data: any;
  @Input() projectGrid: any;
  
  projects: IProject[] = [];
  firstImages: { [projectId: number]: IImage } = {}; // Object to store first images for each project
  categories: { [projectId: number]: string } = {}
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (projects: IProject[]) => {
        // Filter for featured projects
        this.projects = projects;
        
        this.projects.forEach(project => {
          this.projectService.getProjectImage(project.id).subscribe(
            (images: IImage[]) => {
              if (images.length > 0) {
                this.firstImages[project.id] = images[0];
              }
            },
            (error) => {
              console.error('Error fetching first image:', error);
            }
          );
          this.categories[project.id] = 'cat-' + project.service});
      },
      (error) => {
        console.error('Error fetching all projects:', error);
      }
    );
  }
}


