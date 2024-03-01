import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "In our work we have pride, quality is what we provide.",
    page: "Blog Grid"
  }

  blogs = [
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      date: "17",
      month: "Apr",
      title: "We’ll nail your next project, because nobody wants a screw up!",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic1.jpg",
      date: "16",
      month: "Apr",
      title: "Helping you and your house become better acquainted.",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic2.jpg",
      date: "14",
      month: "Apr",
      title: "Creating quality urban lifestyles, building stronger communities.",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic3.jpg",
      date: "25",
      month: "Apr",
      title: "When it comes to your house, don’t mess with the rest, trust the best",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic4.jpg",
      date: "18",
      month: "May",
      title: "Don’t get framed by the competition, trust our solid reputation.",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic5.jpg",
      date: "15",
      month: "Jun",
      title: "We’re the construction kings, building up great things",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic6.jpg",
      date: "18",
      month: "May",
      title: "For your roofing and siding, quality we’ll be providing!",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic7.jpg",
      date: "22",
      month: "Apr",
      title: "When it comes to your house, don’t mess with the rest, trust the best.",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    },
    {
      image: "assets/images/blog/blog-grid/pic8.jpg",
      date: "30",
      month: "Aug",
      title: "Creating quality urban lifestyles, building stronger communities.",
      author: "John",
      comments: "0",
      description: "Same as saying through shrinking from toil and pain these cases perfectly simple."
    }
  ]
}
