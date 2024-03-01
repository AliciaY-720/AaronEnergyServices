import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "Putting a plan to action, to assure your satisfaction!",
    page: "Post Image"
  }

  postContent = {
    image: "assets/images/blog/default/thum1.jpg",
    date: "20",
    month: "June",
    year: "2021",
    author: "Admin",
    type: "Traditional",
    title: "From complete turn key to project manager.",
    description: "<p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massage sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis.</p> <h4> 'When it comes to your house, don’t mess with the rest, trust the best. '</h4> <p> Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p> <blockquote class= 'bg-dark text-white author-quote '> <h4 class= 'm-b0 '>We let our quality work and commitment to customer satisfaction be our slogan. quality you     deserve and dependability you can count on.<i class= 'fa fa-quote-right '></i> </h4> <div class= 'p-t15  text-white '>     <strong class= 'text-primary '>Jessica Mcdade</strong>     <span>Contractor</span> </div> </blockquote> <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massage sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis.</p> <div class= 'row '> <div class= 'col-md-4 col-sm-4 '>     <div class= 'mt-box m-b30 '>         <div class= 'mt-media '>             <img src= 'assets/images/blog/large-blog.jpg ' alt= ' '>         </div>     </div> </div> <div class= 'col-md-4 col-sm-4 '>     <div class= 'mt-box m-b30 '>         <div class= 'mt-media '>             <img src= 'assets/images/blog/large-blog2.jpg ' alt= ' '>         </div>     </div> </div> <div class= 'col-md-4 col-sm-4 '>     <div class= 'mt-box m-b30 '>         <div class= 'mt-media '>             <img src= 'assets/images/blog/large-blog3.jpg ' alt= ' '>         </div>     </div> </div> </div> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the . Proin tincidunt tellus ac porta volutpat.</p>",
    tags: "First Tag,Second Tag,Three Tag,Four Tag,Five Tag",
    blogs: [
      {
        background: "bg-gray",
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
        background: "bg-gray",
        image: "assets/images/blog/latest-blog/pic2.jpg",
        date: "16",
        month: "April",
        year: "2021",
        author: "admin",
        comments: "2",
        title: "Our interior design prediction",
        subtitle: "Today we can tell you, thanks to your passion, hard work creativity."
      }
    ],
    comments: {
      count: "4",
      content: [
        {
          image: "assets/images/testimonials/pic1.jpg",
          date: "20 May 2021 at 8:15 am",
          name: "Federico",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
          reply: []
        },
        {
          image: "assets/images/testimonials/pic4.jpg",
          date: "20 May 2021 at 8:15 am",
          name: "Schiocchet",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
          reply: [
            {
              image: "assets/images/testimonials/pic3.jpg",
              date: "20 May 2021 at 8:15 am",
              name: "Brayden",
              description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
              reply: [
                {
                  image: "assets/images/testimonials/pic2.jpg",
                  date: "20 May 2021 at 8:15 am",
                  name: "Diego",
                  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                  reply: []
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
