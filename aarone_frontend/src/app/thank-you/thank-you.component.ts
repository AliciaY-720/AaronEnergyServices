import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  banner = {
    image: "assets/images/background/bg-site.jpg",
    title: "Thank you",
    page: "Thank you Page"
  }

}
