import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/2.jpg",
    title: "For your roofing and siding, quality we’ll be providing!",
    page: "List Group"
  }
}
