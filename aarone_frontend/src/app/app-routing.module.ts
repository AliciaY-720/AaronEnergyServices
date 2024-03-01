import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Home3Component } from './pages/home/home3/home3.component';
import { Home4Component } from './pages/home/home4/home4.component';
import { AboutUs1Component } from './pages/about/about-us1/about-us1.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogGridComponent } from './pages/blog/blog-grid/blog-grid.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogMasonaryComponent } from './pages/blog/blog-masonary/blog-masonary.component';
import { FaqComponent } from './pages/faq/faq.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostImageComponent } from './pages/post/post-image/post-image.component';
import { PostGalleryComponent } from './pages/post/post-gallery/post-gallery.component';
import { PostVideoComponent } from './pages/post/post-video/post-video.component';
import { PostWithSidebarComponent } from './pages/post/post-with-sidebar/post-with-sidebar.component';
import { ProjectGridComponent } from './pages/projects/project-grid/project-grid.component';
import { ProjectMasonaryComponent } from './pages/projects/project-masonary/project-masonary.component';
import { ProjectCarousalComponent } from './pages/projects/project-carousal/project-carousal.component';
import { ProjectClassicComponent } from './pages/projects/project-classic/project-classic.component';
import { ProjectClassic2Component } from './pages/projects/project-classic2/project-classic2.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { AccordianComponent } from './pages/shortcodes/accordian/accordian.component';
import { ButtonsComponent } from './pages/shortcodes/buttons/buttons.component';
import { IconBoxComponent } from './pages/shortcodes/icon/icon-box/icon-box.component';
import { ListGroupComponent } from './pages/shortcodes/list-group/list-group.component';
import { ModalPopupComponent } from './pages/shortcodes/modal-popup/modal-popup.component';
import { TabsComponent } from './pages/shortcodes/tabs/tabs.component';
import { TablesComponent } from './pages/shortcodes/tables/tables.component';
import { VideosComponent } from './pages/shortcodes/videos/videos.component';
import { IconFontComponent } from './pages/shortcodes/icon/icon-font/icon-font.component';

const routes: Routes = [
  { path: '', component: Home1Component},
  { path: 'index', component: Home1Component},
  { path: 'index2', component: Home2Component},
  { path: 'index3', component: Home3Component},
  { path: 'index4', component: Home4Component},
  { path: 'about', component: AboutUs1Component},
  { path: 'services', component: ServicesComponent},
  { path: 'blog-grid', component: BlogGridComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'blog-masonary', component: BlogMasonaryComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'error404', component: Error404Component},
  { path: 'contact', component: ContactComponent},
  { path: 'post-image', component: PostImageComponent},
  { path: 'post-gallery', component: PostGalleryComponent},
  { path: 'post-video', component: PostVideoComponent},
  { path: 'post-sidebar', component: PostWithSidebarComponent},
  { path: 'project-grid', component: ProjectGridComponent},
  { path: 'project-masonary', component: ProjectMasonaryComponent},
  { path: 'project-carousal', component: ProjectCarousalComponent},
  { path: 'project-classic1', component: ProjectClassicComponent},
  { path: 'project-classic2', component: ProjectClassic2Component},
  { path: 'project-detail', component: ProjectDetailsComponent},
  { path: 'accordian', component: AccordianComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'icon-box', component: IconBoxComponent},
  { path: 'list-group', component: ListGroupComponent},
  { path: 'modal-popup', component: ModalPopupComponent},
  { path: 'tabs', component: TabsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'icon-font', component: IconFontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
