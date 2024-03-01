import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})
export class IconBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "In our work we have pride, quality is what we provide",
    page: "Icon Box"
  }
}
