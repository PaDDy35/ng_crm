import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
}) export class FooterComponent implements OnInit {

  public version$ !: Observable<number>;

  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit(): void {
  /*** METHODE AVEC SUBSCRIBE SUR l'OBSERVABLE version$
  //     this.getVersion();
  // }

  // getVersion() {
  //   this.versionService.getVersion$().subscribe(
  //     valeur => this.version$ = valeur
  //   )
  // }

  *** METHODE AVEC LE | async (voir l'html) */
    this.version$ = this.versionService.getVersion$();
  }
}
