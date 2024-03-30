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
    image: "assets/images/background/bg-site2.jpg",
    title: "Diversified services. Unvarying quality.",
    page: "Services"
  }

  specializations = [
    {
      image: "assets/images/services/1.jpg",
      title: "Concept and Design",
      subtitle: "We provide a comprehensive range of electrical services, covering everything from the installation and maintenance of electrical systems to troubleshooting and upgrades. Our team of skilled electricians ensures the safe and efficient operation of electrical systems in residential, commercial, and industrial settings."
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
      icon: "flaticon-drill",
      title: "Electrical",
      description: "We provide a comprehensive range of electrical services, covering everything from the installation and maintenance of electrical systems to troubleshooting and upgrades. Our team of skilled electricians ensures the safe and efficient operation of electrical systems in residential, commercial, and industrial settings."
    },
    {
      icon: "flaticon-crane",
      title: "Mechanical",
      description: "We provide a comprehensive range of mechanical services, including HVAC (Heating, Ventilation, and Air Conditioning) as well as heating and cooling solutions. Our expertise extends to installation, maintenance, and repair, ensuring optimal comfort and efficiency for residential, commercial, and industrial clients."
    },
    {
      icon: "flaticon-wrench",
      title: "Natural Gas",
      description:  
      "We are industry leaders in natural gas services, offering comprehensive installation, maintenance, and repair solutions. Our qualified technicians prioritize safety and reliability, ensuring optimal operation of natural gas systems for residential, commercial, and industrial clients."
    },
    {
      icon: "flaticon-pipe",
      title: "Hydraulic System",
      description: "We excel in hydraulic systems, encompassing floor water heating and snow melting solutions. Our expertise spans installation, maintenance, and repair, ensuring effective operation for various applications in residential, commercial, and industrial settings."
    },
    {
      icon: "flaticon-chart",
      title: "Professional Opinion",
      description: "Moreover, we offer professional consultations and opinions, drawing upon our extensive industry expertise to provide insightful guidance. Our goal is to empower clients with informed decisions and optimal solutions tailored to their specific requirements and preferences."
    },
    {
      icon: "flaticon-sketch",
      title: "Accurate Engineering",
      description: "Providing precise engineering solutions tailored to your needs. Our dedicated team utilizes advanced techniques and expertise to ensure precision, accuracy, and efficiency in every project, delivering superior results that consistently exceed expectations."
    },
    // {
    //   icon: "flaticon-builder",
    //   title: "General Builder",
    //   description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    // },
    // {
    //   icon: "flaticon-drill",
    //   title: "Electricity",
    //   description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    // },
    // {
    //   icon: "flaticon-art-and-design",
    //   title: "Refurbishment",
    //   description: "Lorem Ipsum is simply dummy text of the printing and setting as Planning your ambitions."
    // }
  ]

  about = {
    experience: "15",
    exData: [
      {
        title: "Residential",
        percent: "37"
      },
      {
        title: "Commercial",
        percent: "31"
      },
      {
        title: "Industrial",
        percent: "32"
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
