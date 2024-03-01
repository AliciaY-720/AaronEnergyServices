import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Quality is what we pursue, We know what we do.",
    page: "Blog Listing"
  }

  blogs = [
    {
      image: "assets/images/blog/default/thum1.jpg",
      date: "20",
      month: "May",
      year: "2021",
      author: "John",
      comments: "0",
      title: "Creating quality urban lifestyles, building stronger communities.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis lorem quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      image: "assets/images/blog/default/thum2.jpg",
      date: "20",
      month: "May",
      year: "2021",
      author: "John",
      comments: "0",
      title: "When it comes to your house, don’t mess with the rest, trust the best",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis lorem quisquam laboriosam esse beatae hic perferendis velit deserunt soluta."
    },
    {
      image: "assets/images/blog/default/thum3.jpg",
      date: "20",
      month: "May",
      year: "2021",
      author: "John",
      comments: "0",
      title: "Making your vision come true, that is what we do.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis lorem quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      image: "assets/images/blog/default/thum4.jpg",
      date: "20",
      month: "May",
      year: "2021",
      author: "John",
      comments: "0",
      title: "Putting a plan to action, to assure your satisfaction!",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis lorem quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    },
    {
      image: "assets/images/blog/default/thum5.jpg",
      date: "20",
      month: "May",
      year: "2021",
      author: "John",
      comments: "0",
      title: "Don’t get framed by the competition, trust our solid reputation.",
      description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis lorem quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis"
    }
  ]

  asideData = {
    recent: [
      {
        image: "assets/images/blog/recent-blog/pic1.jpg",
        date: "25",
        month: "Apr",
        comments: "20",
        title: "Don’t get framed by the competition, trust our solid reputation."
      },
      {
        image: "assets/images/blog/recent-blog/pic2.jpg",
        date: "28",
        month: "Apr",
        comments: "05",
        title: "building your dream house shouldn’t be a nightmare!"
      },
      {
        image: "assets/images/blog/recent-blog/pic3.jpg",
        date: "30",
        month: "Apr",
        comments: "09",
        title: "Helping you and your house become better acquainted."
      }
    ],
    clients: [
      {
        image: "assets/images/client-logo/w1.png"
      },
      {
        image: "assets/images/client-logo/w2.png"
      },
      {
        image: "assets/images/client-logo/w3.png"
      }
    ],
    gallery: [
      {
        thumb: "assets/images/gallery/thumb/pic1.jpg",
        image: "assets/images/gallery/pic1.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic2.jpg",
        image: "assets/images/gallery/pic2.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic3.jpg",
        image: "assets/images/gallery/pic3.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic4.jpg",
        image: "assets/images/gallery/pic4.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic5.jpg",
        image: "assets/images/gallery/pic5.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic6.jpg",
        image: "assets/images/gallery/pic6.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic7.jpg",
        image: "assets/images/gallery/pic7.jpg"
      },
      {
        thumb: "assets/images/gallery/thumb/pic8.jpg",
        image: "assets/images/gallery/pic8.jpg"
      }
    ],
    tags: "A new happy time,Hello!,Big deal,Food,Doing,Person,Inventors Tag,Between,Abilities,Fault,Gets,Macho"
  }
}
