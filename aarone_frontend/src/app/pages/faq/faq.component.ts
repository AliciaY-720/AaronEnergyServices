import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/4.jpg",
    title: "frequently asked questions",
    page: "FAQ"
  }

  faq = [
    {
      serial: "1",
      title: "How do we work?",
      description: "Progressively generate synergistic total linkage through cross-media intellectual. Enthusiastically parallel task team building e-tailers without standards compliant have."
    },
    {
      serial: "2",
      title: "What services do we offer?",
      description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
    },
    {
      serial: "3",
      title: "Why do you have a design fee and purchasing fee on the product?",
      description: "Printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese."
    },
    {
      serial: "4",
      title: "How long will it take to to design and build my project?",
      description: "The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    },
    {
      serial: "5",
      title: "What should I have at our first meeting for my project?",
      description: "Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]
}
