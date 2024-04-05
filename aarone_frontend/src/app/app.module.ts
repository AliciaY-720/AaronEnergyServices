import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Home3Component } from './pages/home/home3/home3.component';
import { Home4Component } from './pages/home/home4/home4.component';
import { Specializations1Component } from './page_sections/home/home1/specializations1/specializations1.component';
import { About1Component } from './page_sections/home/home1/about1/about1.component';
import { OurValue1Component } from './page_sections/home/home1/our-value1/our-value1.component';
import { Mission1Component } from './page_sections/home/home1/mission1/mission1.component';
import { Services1Component } from './page_sections/home/home1/services1/services1.component';
import { CallUs1Component } from './page_sections/home/home1/call-us1/call-us1.component';
import { Projects1Component } from './page_sections/home/home1/projects1/projects1.component';
import { Blogs1Component } from './page_sections/home/home1/blogs1/blogs1.component';
import { Testimonials1Component } from './page_sections/home/home1/testimonials1/testimonials1.component';
import { Header1Component } from './page_sections/header/header1/header1.component';
import { Slider1Component } from './section_elements/sliders/slider1/slider1.component';
import { Footer1Component } from './page_sections/footer/footer1/footer1.component';
import { Header2Component } from './page_sections/header/header2/header2.component';
import { Slider2Component } from './section_elements/sliders/slider2/slider2.component';
import { Specializations2Component } from './page_sections/home/home2/specializations2/specializations2.component';
import { About2Component } from './page_sections/home/home2/about2/about2.component';
import { OurValue2Component } from './page_sections/home/home2/our-value2/our-value2.component';
import { Mission2Component } from './page_sections/home/home2/mission2/mission2.component';
import { Services2Component } from './page_sections/home/home2/services2/services2.component';
import { CallUs2Component } from './page_sections/home/home2/call-us2/call-us2.component';
import { Projects2Component } from './page_sections/home/home2/projects2/projects2.component';
import { Team1Component } from './page_sections/home/home2/team1/team1.component';
import { Pricing1Component } from './page_sections/home/home2/pricing1/pricing1.component';
import { Clients1Component } from './page_sections/home/home2/clients1/clients1.component';
import { Testimonials2Component } from './page_sections/home/home2/testimonials2/testimonials2.component';
import { Footer2Component } from './page_sections/footer/footer2/footer2.component';
import { Slider3Component } from './section_elements/sliders/slider3/slider3.component';
import { About3Component } from './page_sections/home/home3/about3/about3.component';
import { Specializations3Component } from './page_sections/home/home3/specializations3/specializations3.component';
import { Services3Component } from './page_sections/home/home3/services3/services3.component';
import { Projects3Component } from './page_sections/home/home3/projects3/projects3.component';
import { About4Component } from './page_sections/home/home3/about4/about4.component';
import { Story1Component } from './page_sections/home/home3/story1/story1.component';
import { Faq1Component } from './page_sections/home/home3/faq1/faq1.component';
import { Header3Component } from './page_sections/header/header3/header3.component';
import { Slider4Component } from './section_elements/sliders/slider4/slider4.component';
import { Projects4Component } from './page_sections/home/home4/projects4/projects4.component';
import { Services4Component } from './page_sections/home/home4/services4/services4.component';
import { Team2Component } from './page_sections/home/home4/team2/team2.component';
import { Blogs2Component } from './page_sections/home/home4/blogs2/blogs2.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutUs1Component } from './pages/about/about-us1/about-us1.component';
import { Banner1Component } from './page_sections/banner/banner1/banner1.component';
import { Specializations4Component } from './page_sections/about/specializations4/specializations4.component';
import { Team3Component } from './page_sections/about/team3/team3.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { About5Component } from './page_sections/services/about5/about5.component';
import { BlogGridComponent } from './pages/blog/blog-grid/blog-grid.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogMasonaryComponent } from './pages/blog/blog-masonary/blog-masonary.component';
import { BlogGrid1Component } from './page_sections/blog/blog-grid1/blog-grid1.component';
import { BlogList1Component } from './page_sections/blog/blog-list1/blog-list1.component';
import { BlogSidebar1Component } from './page_sections/blog/blog-sidebar1/blog-sidebar1.component';
import { BlogMasonary1Component } from './page_sections/blog/blog-masonary1/blog-masonary1.component';
import { ProjectCarousalComponent } from './pages/projects/project-carousal/project-carousal.component';
import { ProjectCarousal1SectionComponent } from './page_sections/projects/carousal1/project-carousal1-section.component';
import { ProjectClassicComponent } from './pages/projects/project-classic/project-classic.component';
import { Projects5Component } from './page_sections/projects/projects5/projects5.component';
import { ProjectClassic2Component } from './pages/projects/project-classic2/project-classic2.component';
import { Projects6Component } from './page_sections/projects/projects6/projects6.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { ProjectGridComponent } from './pages/projects/project-grid/project-grid.component';
import { ProjectMasonaryComponent } from './pages/projects/project-masonary/project-masonary.component';
import { ProjectDetailSectionComponent } from './page_sections/projects/project-detail-section/project-detail-section.component';
import { SimilarProjects1Component } from './page_sections/projects/similar-projects1/similar-projects1.component';
import { PostGalleryComponent } from './pages/post/post-gallery/post-gallery.component';
import { PostContentComponent } from './page_sections/post/post-content/post-content.component';
import { PostImageComponent } from './pages/post/post-image/post-image.component';
import { PostVideoComponent } from './pages/post/post-video/post-video.component';
import { PostWithSidebarComponent } from './pages/post/post-with-sidebar/post-with-sidebar.component';
import { AccordianComponent } from './pages/shortcodes/accordian/accordian.component';
import { ButtonsComponent } from './pages/shortcodes/buttons/buttons.component';
import { ListGroupComponent } from './pages/shortcodes/list-group/list-group.component';
import { ModalPopupComponent } from './pages/shortcodes/modal-popup/modal-popup.component';
import { TablesComponent } from './pages/shortcodes/tables/tables.component';
import { TabsComponent } from './pages/shortcodes/tabs/tabs.component';
import { VideosComponent } from './pages/shortcodes/videos/videos.component';
import { LeftSidebar1Component } from './page_sections/shortcodes/left-sidebar1/left-sidebar1.component';
import { IconBoxComponent } from './pages/shortcodes/icon/icon-box/icon-box.component';
import { IconFontComponent } from './pages/shortcodes/icon/icon-font/icon-font.component';
import { GridBox1Component } from './section_elements/boxes/grid-box1/grid-box1.component';
import { ServiceBox1Component } from './section_elements/boxes/service-box1/service-box1.component';
import { GridBox2Component } from './section_elements/boxes/grid-box2/grid-box2.component';
import { BlogBox1Component } from './section_elements/boxes/blog-box1/blog-box1.component';
import { TestimonialBox1Component } from './section_elements/boxes/testimonial-box1/testimonial-box1.component';
import { GridBox3Component } from './section_elements/boxes/grid-box3/grid-box3.component';
import { ServiceBox2Component } from './section_elements/boxes/service-box2/service-box2.component';
import { TeamBox1Component } from './section_elements/boxes/team-box1/team-box1.component';
import { PriceBox1Component } from './section_elements/boxes/price-box1/price-box1.component';
import { TestimonialBox2Component } from './section_elements/boxes/testimonial-box2/testimonial-box2.component';
import { ServiceBox3Component } from './section_elements/boxes/service-box3/service-box3.component';
import { StoryBox1Component } from './section_elements/boxes/story-box1/story-box1.component';
import { AccordianBox1Component } from './section_elements/boxes/accordian-box1/accordian-box1.component';
import { SolutionBox1Component } from './section_elements/boxes/solution-box1/solution-box1.component';
import { GridBox4Component } from './section_elements/boxes/grid-box4/grid-box4.component';
import { TeamBox2Component } from './section_elements/boxes/team-box2/team-box2.component';
import { BlogBox2Component } from './section_elements/boxes/blog-box2/blog-box2.component';
import { BlogBox3Component } from './section_elements/boxes/blog-box3/blog-box3.component';
import { BlogBox4Component } from './section_elements/boxes/blog-box4/blog-box4.component';
import { ProjectBox1Component } from './section_elements/boxes/project-box1/project-box1.component';
import { ProjectBox2Component } from './section_elements/boxes/project-box2/project-box2.component';
import { CommentBox1Component } from './section_elements/boxes/comment-box1/comment-box1.component';
import { Projects7Component } from './page_sections/projects/projects7/projects7.component';
import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './section_elements/loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './truncate.pipe';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Specializations1Component,
    About1Component,
    OurValue1Component,
    Mission1Component,
    Services1Component,
    CallUs1Component,
    Projects1Component,
    Blogs1Component,
    Testimonials1Component,
    Header1Component,
    Slider1Component,
    Footer1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Header2Component,
    Slider2Component,
    Specializations2Component,
    About2Component,
    OurValue2Component,
    Mission2Component,
    Services2Component,
    CallUs2Component,
    Projects2Component,
    Team1Component,
    Pricing1Component,
    Clients1Component,
    Testimonials2Component,
    Footer2Component,
    Slider3Component,
    About3Component,
    Specializations3Component,
    Services3Component,
    Projects3Component,
    About4Component,
    Story1Component,
    Faq1Component,
    Header3Component,
    Slider4Component,
    Projects4Component,
    Services4Component,
    Team2Component,
    Blogs2Component,
    Error404Component,
    AboutUs1Component,
    Banner1Component,
    Specializations4Component,
    Team3Component,
    ContactComponent,
    FaqComponent,
    ServicesComponent,
    About5Component,
    BlogGridComponent,
    BlogListComponent,
    BlogMasonaryComponent,
    BlogGrid1Component,
    BlogList1Component,
    BlogSidebar1Component,
    BlogMasonary1Component,
    ProjectCarousalComponent,
    ProjectCarousal1SectionComponent,
    ProjectClassicComponent,
    Projects5Component,
    ProjectClassic2Component,
    Projects6Component,
    ProjectDetailsComponent,
    ProjectGridComponent,
    ProjectMasonaryComponent,
    ProjectDetailSectionComponent,
    SimilarProjects1Component,
    PostGalleryComponent,
    PostContentComponent,
    PostImageComponent,
    PostVideoComponent,
    PostWithSidebarComponent,
    AccordianComponent,
    ButtonsComponent,
    ListGroupComponent,
    ModalPopupComponent,
    TablesComponent,
    TabsComponent,
    VideosComponent,
    LeftSidebar1Component,
    IconBoxComponent,
    IconFontComponent,
    GridBox1Component,
    ServiceBox1Component,
    GridBox2Component,
    BlogBox1Component,
    TestimonialBox1Component,
    GridBox3Component,
    ServiceBox2Component,
    TeamBox1Component,
    PriceBox1Component,
    TestimonialBox2Component,
    ServiceBox3Component,
    StoryBox1Component,
    AccordianBox1Component,
    SolutionBox1Component,
    GridBox4Component,
    TeamBox2Component,
    BlogBox2Component,
    BlogBox3Component,
    BlogBox4Component,
    ProjectBox1Component,
    ProjectBox2Component,
    CommentBox1Component,
    Projects7Component,
    LoaderDirective,
    LoaderComponent,
    SafePipe,
    TruncatePipe,
    ThankYouComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
