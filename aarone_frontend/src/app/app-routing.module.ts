import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Home3Component } from './pages/home/home3/home3.component';
import { Home4Component } from './pages/home/home4/home4.component';
import { AboutUs1Component } from './pages/about/about-us1/about-us1.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectGridComponent } from './pages/projects/project-grid/project-grid.component';
import { ProjectMasonaryComponent } from './pages/projects/project-masonary/project-masonary.component';
import { ProjectCarousalComponent } from './pages/projects/project-carousal/project-carousal.component';
import { ProjectClassicComponent } from './pages/projects/project-classic/project-classic.component';
import { ProjectClassic2Component } from './pages/projects/project-classic2/project-classic2.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', component: Home1Component},
  { path: 'index', component: Home1Component},
  { path: 'index2', component: Home2Component},
  { path: 'index3', component: Home3Component},
  { path: 'index4', component: Home4Component},
  { path: 'about', component: AboutUs1Component},
  { path: 'contact', component: ContactComponent},
  { path: 'project-grid', component: ProjectGridComponent},
  { path: 'project-masonary', component: ProjectMasonaryComponent},
  { path: 'project-carousal', component: ProjectCarousalComponent},
  { path: 'project-classic1', component: ProjectClassicComponent},
  { path: 'project-classic2', component: ProjectClassic2Component},
  { path: 'project-detail', component: ProjectDetailsComponent},
  { path: 'thank-you', component: ThankYouComponent},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
})
export class AppRoutingModule { }
