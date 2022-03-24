import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isCollapsed: boolean;
  linkedin = '../../../../assets/icons/linkedin.png';
  github = '../../../../assets/icons/github.png';
  constructor() {
    this.isCollapsed = true;
   }

  ngOnInit(): void {
  }

}
