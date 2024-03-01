import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-classic',
  templateUrl: './project-classic.component.html',
  styleUrls: ['./project-classic.component.css']
})
export class ProjectClassicComponent implements OnInit {

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
      image: "assets/images/projects/square/pic4.jpg",
      title: "Stronger communities",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic3.jpg",
      title: "Concept to creation",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/square/pic6.jpg",
      title: "Safety for life",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic5.jpg",
      title: "Whatever it takes",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-5",
      image: "assets/images/projects/square/pic7.jpg",
      title: "We build tomorrow",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic8.jpg",
      title: "The key to our success",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/square/pic2.jpg",
      title: "Rising above",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic9.jpg",
      title: "From concept to creation",
      description: "This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
    }
  ]
}
