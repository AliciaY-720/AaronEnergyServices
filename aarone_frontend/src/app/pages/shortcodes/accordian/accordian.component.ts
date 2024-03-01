import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/6.jpg",
    title: "Don’t get framed by the competition, trust our solid reputation.",
    page: "Accordian"
  }

  accordian = [
    {
      serial: "1",
      title: "How long will it take to to design and build my project?",
      description: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      serial: "2",
      title: "Why do I need an Interior Designer?",
      description: "Inspirational quotes have an amazing ability to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      serial: "3",
      title: "How much will my interior design project cost?",
      description: "The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
    }
  ]
}
