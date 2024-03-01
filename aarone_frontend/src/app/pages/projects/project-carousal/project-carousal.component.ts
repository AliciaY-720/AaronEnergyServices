import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-carousal',
  templateUrl: './project-carousal.component.html',
  styleUrls: ['./project-carousal.component.css']
})
export class ProjectCarousalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Broad vision. Careful thought. Hand-crafted design.",
    page: "Project carousel"
  }

  projects = [
    {
      image: "assets/images/projects/square/pic4.jpg",
      title: "Delivering architecture, planning.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    },
    {
      image: "assets/images/projects/square/pic7.jpg",
      title: "Capitalizing on the unique qualities.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    },
    {
      image: "assets/images/projects/square/pic5.jpg",
      title: "Delivering architecture, planning.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    },
    {
      image: "assets/images/projects/square/pic6.jpg",
      title: "Improving quality of an integrated.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    },
    {
      image: "assets/images/projects/square/pic3.jpg",
      title: "Unique solutions for your home.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    }
  ]
}
