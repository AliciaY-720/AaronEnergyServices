import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../project.service';
import { IProject } from '../../../../iproject';
import { IImage } from '../../../../iimage';

@Component({
  selector: 'app-projects1',
  templateUrl: './projects1.component.html',
  styleUrls: ['./projects1.component.css']
})


export class Projects1Component implements OnInit {
  featuredProjects: IProject[] = [];
  firstImages: { [projectId: number]: IImage } = {}; // Object to store first images for each project

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (projects: IProject[]) => {
        // Filter for featured projects
        this.featuredProjects = projects.filter(project => project.is_featured);
        
        this.featuredProjects.forEach(project => {
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
        });
      },
      (error) => {
        console.error('Error fetching all projects:', error);
      }
    );
  }
}



