import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-masonary',
  templateUrl: './blog-masonary.component.html',
  styleUrls: ['./blog-masonary.component.css']
})
export class BlogMasonaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "For your roofing and siding, quality we’ll be providing!",
    page: "Blog Masonry"
  }

  blogs = [
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      date: "16",
      month: "May",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Building it better in concrete.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/default/thum1.jpg",
      date: "25",
      month: "Apr",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Design is where science and art break.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/blog-grid/pic5.jpg",
      date: "18",
      month: "Jun",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Architecture is the art of how to waste.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/blog-grid/pic7.jpg",
      date: "22",
      month: "Jun",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "A designer is a planner with an aesthetic sense.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/blog-grid/pic6.jpg",
      date: "05",
      month: "Jul",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Being a famous designer is like being a famous dentist.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/default/thum2.jpg",
      date: "14",
      month: "Jun",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Being a famous designer is like being a famous dentist.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/blog-grid/pic8.jpg",
      date: "25",
      month: "Jul",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Being a famous designer is like being a famous dentist.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/default/thum4.jpg",
      date: "19",
      month: "Aug",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Architecture is the art of how to waste.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    },
    {
      image: "assets/images/blog/default/thum3.jpg",
      date: "30",
      month: "Aug",
      year: "2021",
      author: "Admin",
      comments: "2",
      title: "Architecture is the art of how to waste.",
      description: "Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan."
    }
  ]
}
