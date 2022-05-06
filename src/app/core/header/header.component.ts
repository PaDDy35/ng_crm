import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) export class HeaderComponent implements OnInit {

  public version : number = 0;

  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit(): void {
    this.getVersion();
  }

  public incrementerVersion() {
    this.versionService.incrementerVersion();
  }

  getVersion() {
    this.versionService.getVersion$().subscribe(
      valeur => {this.version = valeur,
                console.log(valeur)}
    )
  }
}
