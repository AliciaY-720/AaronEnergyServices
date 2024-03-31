import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IService } from './iservice';
import { IProject } from './iproject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<IService[]> {
    return this.http.get<IService[]>(`${this.baseUrl}services/`);
  }
  

  getServiceProject(projectId: number): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.baseUrl}services/${projectId}/projects/`);
  }
}
