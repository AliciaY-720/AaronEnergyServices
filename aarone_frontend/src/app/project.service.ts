import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from './iproject';
import { IImage } from './iimage';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.baseUrl}projects/`);
  }
  
  getFeaturedProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.baseUrl}projects/?is_featured=true`);
  }

  getProjectImage(projectId: number): Observable<IImage[]> {
    return this.http.get<IImage[]>(`${this.baseUrl}projects/${projectId}/images/`);
  }
}
