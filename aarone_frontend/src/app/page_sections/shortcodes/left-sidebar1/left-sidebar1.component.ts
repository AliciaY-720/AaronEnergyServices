import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar1',
  templateUrl: './left-sidebar1.component.html',
  styleUrls: ['./left-sidebar1.component.css']
})
export class LeftSidebar1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testimonials = [
    {
      image: "assets/images/testimonials/pic1.jpg",
      name: "Shelly Johnson",
      designation: "Business Person",
      quote: "When it comes to your house, don’t mess with the rest, trust the best."
    },
    {
      image: "assets/images/testimonials/pic2.jpg",
      name: "Jhone Doe",
      designation: "Business Person",
      quote: "When it comes to your house, don’t mess with the rest, trust the best."
    },
    {
      image: "assets/images/testimonials/pic3.jpg",
      name: "Marry Jane",
      designation: "Business Person",
      quote: "When it comes to your house, don’t mess with the rest, trust the best."
    }
  ]
}
