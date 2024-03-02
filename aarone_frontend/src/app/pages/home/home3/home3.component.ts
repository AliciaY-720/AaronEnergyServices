import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      image: "assets/images/services/1.jpg",
      title: "Concept and Design",
      subtitle: "Est notare quam littera gothica, quam nunc putamus parum claram."
    },
    {
      image: "assets/images/services/2.jpg",
      title: "Refurbishment",
      subtitle: "Est notare quam littera gothica, quam nunc putamus parum claram."
    },
    {
      image: "assets/images/services/3.jpg",
      title: "General Builder",
      subtitle: "Est notare quam littera gothica, quam nunc putamus parum claram."
    }
  ]

  services = [
    {
      icon: "flaticon-city",
      title: "Electrical",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-paint",
      title: "Mechanical",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-crane",
      title: "Nature Gas",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-decorating",
      title: "Hydraulic System",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-chart",
      title: "Professional Opinion",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-sketch",
      title: "Accurate Engineering",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-builder",
      title: "General Builder",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-drill",
      title: "Electricity",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-art-and-design",
      title: "Refurbishment",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    }
  ]

  projects = [
    {
      category: "cat-1",
      image: "assets/images/services/service-projects/shooping-mall.jpg",
      title: "Shopping Mall",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-2",
      image: "assets/images/services/service-projects/hospital.jpg",
      title: "Hospital Building",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-3",
      image: "assets/images/services/service-projects/garden-house.jpg",
      title: "Garden House",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-4",
      image: "assets/images/services/service-projects/villa.jpg",
      title: "Villa",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-5",
      image: "assets/images/services/service-projects/road-construction.jpg",
      title: "Road Construction",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-4",
      image: "assets/images/services/service-projects/bridge.jpg",
      title: "Bridge Construction",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-3",
      image: "assets/images/services/service-projects/building-ren.jpg",
      title: "Building Renovation",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-2",
      image: "assets/images/services/service-projects/dam-construction.jpg",
      title: "Dam Construction",
      place: "Muscat, Sultanate of Oman"
    }
  ]

  about2 = {
    experience: "15",
    exData: [
      {
        title: "Architecher",
        percent: "85"
      },
      {
        title: "Construction",
        percent: "78"
      },
      {
        title: "Interior",
        percent: "40"
      }
    ]
  }

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

  faq = {
    faq: [
      {
        serial: "1",
        title: "Choose between rates or instant payment",
        description: "Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important."
      },
      {
        serial: "2",
        title: "Come to see a live preview",
        description: "Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success."
      },
      {
        serial: "3",
        title: "Choose the correct service",
        description: "The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
      }
    ],
    solutions: [
      {
        icon: "flaticon-sketch",
        title: "Assistance",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
        background: "bg-gray",
        text: "text-black",
        link: ""
      },
      {
        icon: "flaticon-ui",
        title: "Financing",
        description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning.",
        background: "bg-dark",
        text: "text-white",
        link: "yellow"
      }
    ]
  }
}
