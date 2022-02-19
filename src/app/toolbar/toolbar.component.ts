import { Component, OnInit } from '@angular/core';
import {
  faAlignLeft,
  faGear,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  user = faUser;
  setting = faGear;
  logout = faSignOut;
  al = faAlignLeft;
}
