import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent  implements OnInit{

  linksItems: Array<any> = []

  constructor(){

  }

  ngOnInit(): void {
    this.linksItems = [
      {
        name: 'Home',
        icon: 'home',
        router: ['']
      },
      {
        name: 'Products',
        icon: 'category',
        router: ['/products']
      },

    ]
  }

}
