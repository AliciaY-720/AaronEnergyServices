import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html',
  styleUrls: ['./about-us1.component.css']
})
export class AboutUs1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "https://github.com/AliciaY-720/aaronenergy.github.io/blob/main/images/banner.jpg?raw=true",
    title: "Where Precision Meets Comfort: Electrical, HVAC, Heating & Cooling, Nature Gas and Hydraulic Mastery!",
    page: "About Us"
  }

  about = {
    slides: [
      {
        image: "https://github.com/AliciaY-720/aaronenergy.github.io/blob/main/images/webwxgetmsgimg6.jpg?raw=true"
      },
      {
        image: "https://github.com/AliciaY-720/aaronenergy.github.io/blob/main/images/IMG_4008.jpg?raw=true"
      },
      {
        image: "https://github.com/AliciaY-720/aaronenergy.github.io/blob/main/images/IMG_0914.JPG?raw=true"
      },
      {
        image: "https://github.com/AliciaY-720/aaronenergy.github.io/blob/main/images/IMG_4027.jpg?raw=true"
      }
    ],
    experience: "15",
    author: "Aaron Qiu",
    sign: "assets/images/Signature+Black.png",
    designation: "Master Electrician & Founder"
  }

  specializations = [
    {
      serial: "1",
      icon: "assets/images/icon/crane-1.png",
      title: "Mechanical",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "2",
      icon: "assets/images/icon/idea.png",
      title: "Electrical",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "3",
      icon: "assets/images/icon/toolbox.png",
      title: "Natural Gas",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "4",
      icon: "assets/images/icon/plumb-bob.png",
      title: "Hydraulic System",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    }
  ]

  team = [
    {
      image: "assets/images/our-team4/pic1.png",
      name: "Avie Beaton",
      designation: "Ceo & Architect",
      description: "Which is worse, that everyone has his price, or that the price is always so low."
    },
    {
      image: "assets/images/our-team4/pic2.png",
      name: "Ben Jonson",
      designation: "Architect",
      description: "Which is worse, that everyone has his price, or that the price is always so low."
    },
    {
      image: "assets/images/our-team4/pic3.png",
      name: "Ashley Fletcher",
      designation: "Finances",
      description: "Which is worse, that everyone has his price, or that the price is always so low."
    }
  ]

  story = [
    {
      image: "assets/images/gallery/portrait/pic4.jpg",
      year: "2011-12",
      title: "Eisenhower Memoria",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged."
    },
    {
      image: "assets/images/gallery/portrait/pic7.jpg",
      year: "2013-14",
      title: "Columbia Sport Center",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged."
    },
    {
      image: "assets/images/gallery/portrait/pic6.jpg",
      year: "2015-16",
      title: "Park Boathouse",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged."
    },
    {
      image: "assets/images/gallery/portrait/pic5.jpg",
      year: "2017-18",
      title: "Museum Expansion",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged."
    }
  ]
}
