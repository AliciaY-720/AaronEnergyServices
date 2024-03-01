import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specializations = [
    {
      serial: "1",
      icon: "assets/images/icon/compass.png",
      title: "Architecture Design",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
      background: "assets/images/services/1.jpg"
    },
    {
      serial: "2",
      icon: "assets/images/icon/crane-1.png",
      title: "Building Construction",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
      background: "assets/images/services/3.jpg"
    },
    {
      serial: "3",
      icon: "assets/images/icon/renovation.png",
      title: "Building Renovation",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
      background: "assets/images/services/2.jpg"
    }
  ]

  about = {
    slides: [
      {
        image: "assets/images/gallery/pic8.jpg"
      },
      {
        image: "assets/images/gallery/pic6.jpg"
      },
      {
        image: "assets/images/gallery/pic9.jpg"
      },
      {
        image: "assets/images/gallery/pic2.jpg"
      },
      {
        image: "assets/images/gallery/pic3.jpg"
      }
    ],
    facts: [
      {
        icon: "flaticon-city",
        figure: "2500",
        title: "Projects Done"
      },
      {
        icon: "flaticon-worker",
        figure: "1500",
        title: "Happy Client"
      },
      {
        icon: "flaticon-crane",
        figure: "840",
        title: "Industries Served"
      },
      {
        icon: "flaticon-art-and-design",
        figure: "180",
        title: "Renovate"
      }
    ]
  }

  ourValue = {
    video: "https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0",
    sign: "assets/images/Signature+Black.png",
    author: "David Houkr",
    designation: "Architect & Founder"
  }

  services = [
    {
      icon: "assets/images/icon/crane-1.png",
      title: "Building \nConstruction",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/renovation.png",
      title: "Building \nRenovation",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/toolbox.png",
      title: "Building \nMaintenance",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/compass.png",
      title: "Architecture\nDesign",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/idea.png",
      title: "Construction \nConsultant",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/dump-truck.png",
      title: "Material \nSupply",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/architecture.png",
      title: "House \nRenovation",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      icon: "assets/images/icon/planning.png",
      title: "Interior \nDesign",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    }
  ]

  projects = [
    {
      category: "cat-1",
      image: "assets/images/projects/square/pic4.jpg",
      title: "2-storey House",
      subtitle: "Construction, interior"
    },
    {
      category: "cat-2",
      image: "assets/images/projects/square/pic2.jpg",
      title: "City Buildings",
      subtitle: "Buildings, Engineering"
    },
    {
      category: "cat-3",
      image: "assets/images/projects/square/pic3.jpg",
      title: "Living room",
      subtitle: "Aqaba, Jordan"
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic5.jpg",
      title: "Bridge Architecture",
      subtitle: "Design and Construction"
    },
    {
      category: "cat-5",
      image: "assets/images/projects/square/pic7.jpg",
      title: "Feugiat nulla",
      subtitle: "Engineering, interior"
    },
    {
      category: "cat-4",
      image: "assets/images/projects/square/pic6.jpg",
      title: "Skeptic cambridge",
      subtitle: "Construction"
    }
  ]

  team = [
    {
      image: "assets/images/our-team5/pic4.png",
      name: "Avie Beaton",
      designation: "Ceo & Architect"
    },
    {
      image: "assets/images/our-team5/pic3.png",
      name: "Ben Jonson",
      designation: "Architect"
    },
    {
      image: "assets/images/our-team5/pic2.png",
      name: "Ashley Fletcher",
      designation: "Finances"
    },
    {
      image: "assets/images/our-team5/pic5.png",
      name: "Ashley Fletcher",
      designation: "Finances"
    }
  ]

  pricing = [
    {
      plan: "Basic Plan",
      price: "$29",
      includes: [
        {
          name: "Phone & Email Support"
        },
        {
          name: "3 Social Account"
        },
        {
          name: "Branded Reports"
        }
      ]
    },
    {
      plan: "Pro Plan",
      price: "$49",
      includes: [
        {
          name: "Phone & Email Support"
        },
        {
          name: "3 Social Account"
        },
        {
          name: "Branded Reports"
        }
      ]
    },
    {
      plan: "Premium Plan",
      price: "$99",
      includes: [
        {
          name: "Phone & Email Support"
        },
        {
          name: "3 Social Account"
        },
        {
          name: "Branded Reports"
        }
      ]
    }
  ]

  clients = [
    {
      image: "assets/images/client-logo/w1.png"
    },
    {
      image: "assets/images/client-logo/w2.png"
    },
    {
      image: "assets/images/client-logo/w3.png"
    },
    {
      image: "assets/images/client-logo/w4.png"
    },
    {
      image: "assets/images/client-logo/w5.png"
    },
    {
      image: "assets/images/client-logo/w6.png"
    }
  ]

  testimonials = [
    {
      image: "assets/images/testimonials/pic1.jpg",
      quote: "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
      name: "Shelly Johnson",
      designation: "Business Person"
    },
    {
      image: "assets/images/testimonials/pic1.jpg",
      quote: "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
      name: "Shelly Johnson",
      designation: "Business Person"
    },
    {
      image: "assets/images/testimonials/pic1.jpg",
      quote: "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
      name: "Shelly Johnson",
      designation: "Business Person"
    }
  ]
}
