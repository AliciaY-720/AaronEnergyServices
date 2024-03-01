import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/1.jpg",
    title: "Diversified services. Unvarying quality.",
    page: "Services"
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
      title: "Rooms & Halls",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-paint",
      title: "Renovation",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-crane",
      title: "Construction",
      description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    },
    {
      icon: "flaticon-decorating",
      title: "Interior",
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

  about = {
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

  faq = {
    faq: [
      {
        serial: "1",
        title: "Choose between rates or instant payment",
        description: "Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipi scing vitae est. Sed nec felis pellentesque, lacinia dui sed"
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
