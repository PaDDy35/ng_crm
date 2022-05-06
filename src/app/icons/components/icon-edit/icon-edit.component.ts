import { Component, OnInit } from '@angular/core';
import { faMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent implements OnInit {
  public myIcon = faMarker;
  // public myIcon = fa-light fa-marker;
  constructor() { }

  ngOnInit(): void {
  }

}
