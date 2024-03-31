import { Component, Input, OnInit } from '@angular/core';
import { IService } from 'src/app/iservice';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component implements OnInit {

  services: IService[] = [];

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(
      (services: IService[]) => {
        this.services = services; // Assign the fetched services to the component variable
      },
      (error) => {
        console.error('Error fetching all services:', error);
      }
    );
  }
}

