import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/background/bg-site.png",
    title: "Always dedicated and devoted",
    page: "Project Grid"
  }

  projects = [
    {
      category: "cat-1",
      image: "assets/images/projects/portrait/pic1.jpg",
      linkImage: "assets/images/projects/portrait/pic4.jpg",
      title: "Life style building",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/portrait/pic2.jpg",
      linkImage: "assets/images/projects/portrait/pic9.jpg",
      title: "Central City Building",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic3.jpg",
      linkImage: "assets/images/projects/portrait/pic6.jpg",
      title: "Nathan Brooke House",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/portrait/pic4.jpg",
      linkImage: "assets/images/projects/portrait/pic5.jpg",
      title: "Metropolitan Museum",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-5",
      image: "assets/images/projects/portrait/pic5.jpg",
      linkImage: "assets/images/projects/portrait/pic7.jpg",
      title: "Art Family Residence",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-4",
      image: "assets/images/projects/portrait/pic6.jpg",
      linkImage: "assets/images/projects/portrait/pic8.jpg",
      title: "Office Partition Walls",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic7.jpg",
      linkImage: "assets/images/projects/portrait/pic11.jpg",
      title: "Glass Office Screen",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-2",
      image: "assets/images/projects/portrait/pic8.jpg",
      linkImage: "assets/images/projects/portrait/pic12.jpg",
      title: "State Hermitage Museum",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    },
    {
      category: "cat-1",
      image: "assets/images/projects/portrait/pic9.jpg",
      linkImage: "assets/images/projects/portrait/pic11.jpg",
      title: "Central Florida University",
      description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are."
    }
  ]
}
