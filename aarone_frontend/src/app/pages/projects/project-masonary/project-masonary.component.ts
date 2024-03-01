import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-masonary',
  templateUrl: './project-masonary.component.html',
  styleUrls: ['./project-masonary.component.css']
})
export class ProjectMasonaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Creating quality urban lifestyles, building stronger communities.",
    page: "Project Masonry"
  }

  projects = [
    {
      category: "cat-1",
      image: "assets/images/projects/portrait/pic4.jpg",
      title: "Life style building",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/pic-1.jpg",
      title: "Central City Building",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic7.jpg",
      title: "Nathan Brooke House",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic9.jpg",
      title: "Metropolitan Museum.",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-5",
      image: "assets/images/projects/portrait/pic6.jpg",
      title: "Art Family Residence",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic3.jpg",
      title: "Office Partition Walls",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic5.jpg",
      title: "Glass Office Screen",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic6.jpg",
      title: "State Hermitage Museum",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-1",
      image: "assets/images/projects/portrait/pic9.jpg",
      title: "Central Florida University",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic5.jpg",
      title: "Nathan Brooke House",
      subtitle: "Engineering your dreams with us."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/square/pic8.jpg",
      title: "Life style building",
      subtitle: "Engineering your dreams with us."
    }
  ]
}
