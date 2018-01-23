import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isIn = false;   // store state
  ngOnInit() {
  }

  toggleState() { // click handler
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

}
