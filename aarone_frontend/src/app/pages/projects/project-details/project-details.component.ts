import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/background/bg-map.jpg",
    title: "Helping you and your project become better acquainted.",
    page: "Project Detail"
  }

  projectDetail = {
    images: [
      {
        image: "assets/images/projects/portrait/pic7.jpg"
      },
      {
        image: "assets/images/projects/portrait/pic4.jpg"
      },
      {
        image: "assets/images/projects/portrait/pic5.jpg"
      }
    ],
    date: "July 10, 2021",
    client: "Studio Massimo, Italy",
    type: "Contruction, Brading",
    location: "Mountain View CA 94043",
    year: "2021",
    video: {
      thumb: "http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=s3A7AK1K2hc"
    },
    title: "Creating a sustainable future through building preservation.",
    description: "Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I have suppose. the architect represents neither a Dionysian nor an Apollinian condition as here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic are expression."
  }

  similarProjects = [
    {
      image: "assets/images/projects/square/pic4.jpg",
      title: "Delivering architecture.",
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
      title: "Improving quality of life integrated.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    },
    {
      image: "assets/images/projects/square/pic3.jpg",
      title: "Unique solutions for your home.",
      description: "Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim"
    }
  ]
}
