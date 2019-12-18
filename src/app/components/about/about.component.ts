import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public email: string;


  constructor() { 
    this.title = "Alex Cofré Martinez";
    this.subTitle = "Desarrollador Web";
    this.email = "alex.cofre.martinez@gmail.com"
  }

  ngOnInit() {
  }

}
