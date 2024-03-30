import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-classic2',
  templateUrl: './project-classic2.component.html',
  styleUrls: ['./project-classic2.component.css']
})
export class ProjectClassic2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Creating quality urban lifestyles, building stronger communities.",
    page: "Project Classic View"
  }

  projects = [
    {
      category: "cat-1",
      image: "assets/images/gallery/portrait/pic1.jpg",
      title: "Stronger communities",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic4.jpg",
      title: "To-Do Dashboard",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-3",
      image: "assets/images/gallery/portrait/pic2.jpg",
      title: "WhereTO App",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic5.jpg",
      title: "Hydraulic System",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-5",
      image: "assets/images/gallery/portrait/pic3.jpg",
      title: "Events and More",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic6.jpg",
      title: "Remind~Me More",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-3",
      image: "assets/images/gallery/portrait/pic4.jpg",
      title: "Workout Buddy",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic7.jpg",
      title: "Speed Detector",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-1",
      image: "assets/images/gallery/portrait/pic5.jpg",
      title: "Generic Apps",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic8.jpg",
      title: "Generic Apps",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/square/pic9.jpg",
      title: "Speed Detector",
      description: "Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod."
    }
  ]
}
