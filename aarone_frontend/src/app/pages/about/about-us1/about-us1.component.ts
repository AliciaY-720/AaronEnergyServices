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
    image: "assets/images/banner/1.jpg",
    title: "Creating quality urban lifestyles, building stronger communities.",
    page: "About 1"
  }

  about = {
    slides: [
      {
        image: "assets/images/gallery/portrait/pic4.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic5.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic6.jpg"
      },
      {
        image: "assets/images/gallery/portrait/pic7.jpg"
      }
    ],
    experience: "25",
    author: "David Houkr",
    sign: "assets/images/Signature+Black.png",
    designation: "Architect & Founder"
  }

  specializations = [
    {
      serial: "1",
      icon: "assets/images/icon/crane-1.png",
      title: "Building \nConstruction",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "2",
      icon: "assets/images/icon/renovation.png",
      title: "Building \nRenovation",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "3",
      icon: "assets/images/icon/toolbox.png",
      title: "Building \nMaintenance",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      serial: "4",
      icon: "assets/images/icon/compass.png",
      title: "Architecture \nDesign",
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
