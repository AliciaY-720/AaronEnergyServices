import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specializations = [
    {
      image: "assets/images/pic1.jpg",
      title: "Construction",
      subtitle: "Engineering your dreams."
    },
    {
      image: "assets/images/pic2.jpg",
      title: "Architecture",
      subtitle: "Life is Architecture."
    },
    {
      image: "assets/images/pic3.jpg",
      title: "Renovation",
      subtitle: "Dazzling Design"
    }
  ]

  aboutSlides = [
    {
      image: "assets/images/gallery/pic1.jpg"
    },
    {
      image: "assets/images/gallery/pic8.jpg"
    },
    {
      image: "assets/images/gallery/pic9.jpg"
    },
    {
      image: "assets/images/gallery/pic6.jpg"
    },
    {
      image: "assets/images/gallery/pic2.jpg"
    }
  ]

  ourValue = {
    author: {
      name: "Aaron Qiu",
      designation: "Master Electrician & Founder",
      sign: "assets/images/Signature+Black.png"
    },
    video: "https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0",
    facts: [
      {
        figure: "450",
        title: "Active Experts"
      },
      {
        figure: "670",
        title: "Satisfied Clients"
      },
      {
        figure: "1500",
        title: "Project Complete"
      }
    ],
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
        title: "Building",
        percent: "65"
      },
      {
        title: "Interior",
        percent: "40"
      },
      {
        title: "Commercial",
        percent: "55"
      }
    ]
  }

  services = [
    {
      title: "Building \nConstruction",
      serial: "1",
      icon: "assets/images/icon/crane-1.png",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      title: "Building \nRenovation",
      serial: "2",
      icon: "assets/images/icon/renovation.png",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      title: "Building \nMaintenance",
      serial: "3",
      icon: "assets/images/icon/toolbox.png",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    },
    {
      title: "Architecture \nDesign",
      serial: "4",
      icon: "assets/images/icon/compass.png",
      description: "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
    }
  ]

  // projects = [
  //   {
  //     category: "cat-2",
  //     image: "assets/images/projects/portrait/pic1.jpg",
  //     title: "Chair Furniture",
  //     place: "Muscat, Sultanate of Oman"
  //   },
  //   {
  //     category: "cat-2",
  //     image: "assets/images/projects/portrait/pic2.jpg",
  //     title: "Furniture",
  //     place: "North House"
  //   },
  //   {
  //     category: "cat-6",
  //     image: "assets/images/projects/portrait/pic3.jpg",
  //     title: "Living room",
  //     place: "Aqaba, Jordan"
  //   },
  //   {
  //     category: "cat-6",
  //     image: "assets/images/projects/portrait/pic4.jpg",
  //     title: "Dream Workspace",
  //     place: "Perth, Australia"
  //   },
  //   {
  //     category: "cat-3",
  //     image: "assets/images/projects/portrait/pic5.jpg",
  //     title: "Decore",
  //     place: "Aqaba, Jordan"
  //   },
  //   {
  //     category: "cat-3",
  //     image: "assets/images/projects/portrait/pic6.jpg",
  //     title: "Modern Decoration",
  //     place: "Muscat, Sultanate of Oman"
  //   },
  //   {
  //     category: "cat-1",
  //     image: "assets/images/projects/portrait/pic7.jpg",
  //     title: "Bathroom",
  //     place: "North House"
  //   },
  //   {
  //     category: "cat-6",
  //     image: "assets/images/projects/portrait/pic1.jpg",
  //     title: "Dream Workspace",
  //     place: "Perth, Australia"
  //   },
  //   {
  //     category: "cat-5",
  //     image: "assets/images/projects/portrait/pic2.jpg",
  //     title: "Decore",
  //     place: "Aqaba, Jordan"
  //   },
  //   {
  //     category: "cat-4",
  //     image: "assets/images/projects/portrait/pic3.jpg",
  //     title: "Modern Decoration",
  //     place: "Muscat, Sultanate of Oman"
  //   },
  //   {
  //     category: "cat-1",
  //     image: "assets/images/projects/portrait/pic4.jpg",
  //     title: "Bathroom",
  //     place: "North House"
  //   }
  //   // ,
  //   // {
  //   //   category: "cat-6",
  //   //   image: "assets/images/projects/pic-l-5.jpg",
  //   //   title: "Lamp decoration",
  //   //   place: "Aqaba, Jordan"
  //   // },
  //   // {
  //   //   category: "cat-5",
  //   //   image: "assets/images/projects/pic-1.jpg",
  //   //   title: "Building house",
  //   //   place: "Ultanate of Oman"
  //   // },
  //   // {
  //   //   category: "cat-4",
  //   //   image: "assets/images/projects/pic-2.jpg",
  //   //   title: "Spa residence",
  //   //   place: "Perth, Australia"
  //   // }
  // ]

  projects = [
    {
      category: "cat-2",
      image: "assets/images/projects/portrait/pic1.jpg",
      title: "Chair Furniture",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-2",
      image: "assets/images/projects/portrait/pic2.jpg",
      title: "Furniture",
      place: "North House"
    },
    {
      category: "cat-6",
      image: "assets/images/projects/portrait/pic3.jpg",
      title: "Living room",
      place: "Aqaba, Jordan"
    },
    {
      category: "cat-6",
      image: "assets/images/projects/portrait/pic4.jpg",
      title: "Dream Workspace",
      place: "Perth, Australia"
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic5.jpg",
      title: "Decore",
      place: "Aqaba, Jordan"
    },
    {
      category: "cat-3",
      image: "assets/images/projects/portrait/pic6.jpg",
      title: "Modern Decoration",
      place: "Muscat, Sultanate of Oman"
    },
    {
      category: "cat-1",
      image: "assets/images/projects/portrait/pic7.jpg",
      title: "Bathroom",
      place: "North House"
    },
    {
      category: "cat-6",
      image: "assets/images/projects/pic-l-5.jpg",
      title: "Lamp decoration",
      place: "Aqaba, Jordan"
    },
    {
      category: "cat-5",
      image: "assets/images/projects/pic-1.jpg",
      title: "Building house",
      place: "Ultanate of Oman"
    },
    {
      category: "cat-4",
      image: "assets/images/projects/pic-2.jpg",
      title: "Spa residence",
      place: "Perth, Australia"
    }
  ]

  blogs = [
    {
      background: "",
      image: "assets/images/blog/latest-blog/pic1.jpg",
      date: "14",
      month: "April",
      year: "2021",
      author: "admin",
      comments: "2",
      title: "Commercial design for project",
      subtitle: "Which is the same as saying through shrinking from toil and pain."
    },
    {
      background: "",
      image: "assets/images/blog/latest-blog/pic2.jpg",
      date: "16",
      month: "April",
      year: "2021",
      author: "admin",
      comments: "2",
      title: "Our interior design prediction",
      subtitle: "Today we can tell you, thanks to your passion, hard work creativity."
    },
    {
      background: "",
      image: "assets/images/blog/latest-blog/pic3.jpg",
      date: "18",
      month: "April",
      year: "2021",
      author: "admin",
      comments: "2",
      title: "Low cost interior designing ideas",
      subtitle: "Every pleasure is to be welcome every pain avoided. in certain."
    }
  ]

  testimonials = [
    {
      image: "assets/images/testimonials/pic1.jpg",
      name: "Shelly Johnson",
      designation: "Business Person",
      quote: "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry."
    },
    {
      image: "assets/images/testimonials/pic2.jpg",
      name: "Cuthbert Brain",
      designation: "Contractor",
      quote: "The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry."
    },
    {
      image: "assets/images/testimonials/pic3.jpg",
      name: "Cathrine Wagner",
      designation: "Builder",
      quote: "The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry."
    },
    {
      image: "assets/images/testimonials/pic4.jpg",
      name: "John Doe",
      designation: "Business Person",
      quote: "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry."
    },
    {
      image: "assets/images/testimonials/pic5.jpg",
      name: "Cuthbert Brain",
      designation: "Business Person",
      quote: "The template itself is very ext ended. excellent customer support!.  simply dummy text of the printing and industry. the printing and typesetting industry."
    }
  ]
}
