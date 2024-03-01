import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {

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

  ourValue = {
    video: "https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0",
    sign: "assets/images/Signature+Black.png",
    author: "David Houkr",
    designation: "Architect & Founder"
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

  blogs = [
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      date: "17",
      month: "April",
      author: "John",
      comments: "0",
      title: "We’ll nail your next project, because nobody wants!",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic1.jpg",
      date: "16",
      month: "April",
      author: "John",
      comments: "0",
      title: "Helping you and your house become better acquainted.",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic2.jpg",
      date: "14",
      month: "April",
      author: "John",
      comments: "0",
      title: "Creating quality urban lifestyles, building stronger communities.",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
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
