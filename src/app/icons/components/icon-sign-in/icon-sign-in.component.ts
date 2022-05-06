import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-sign-in',
  templateUrl: './icon-sign-in.component.html',
  styleUrls: ['./icon-sign-in.component.scss']
})
export class IconSignInComponent implements OnInit {
  public myIcon = faSignInAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
