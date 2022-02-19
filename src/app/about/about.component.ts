import { Component, OnInit } from '@angular/core';
import { AboutgetService } from './../services/aboutget.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  users: any;
  ulike = 10;
  like() {
    this.ulike++;
  }
  constructor(private about: AboutgetService) {
    about.about().subscribe((data: any) => (this.users = data?.data));
    // console.log(this.users);
  }

  ngOnInit(): void {}
}
