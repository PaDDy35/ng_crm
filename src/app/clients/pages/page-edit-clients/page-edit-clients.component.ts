import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/core/Models/Client-M';
import { VersionService } from 'src/app/shared/services/version.service';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrls: ['./page-edit-clients.component.scss']
}) export class PageEditClientsComponent implements OnInit, OnDestroy {

  public clientId: number = 0;
  public client: Client = {} as Client;
  public clientName : string = '';
  public souscriptionGetVersion: Subscription | null = null;

  constructor(
      private activatedRoute: ActivatedRoute,
      private clientsService: ClientsService,
      private router: Router,
      private versionService: VersionService)  { }

  getClientId() {
    return this.clientId;
  }

  ngOnInit(): void {
    this.souscriptionGetVersion = this.versionService.getVersion$().subscribe({
      next:() => console.info("TEST SUBSCRIBE next"),
      error:() => console.info("TEST SUBSCRIBE error"),
      complete:() => console.info("TEST SUBSCRIBE complete")
    });
    // on récupère la dernière partie de l'URL pour obtenir le clientId, seule l'activatedRoute le permet !
    this.activatedRoute.url.subscribe(
      url => {
        this.clientId = Number(url[url.length -1])
    // On recherche le Client
        this.clientsService.getClientById(this.clientId).subscribe(
          client => {this.client = client;
                     this.clientName = this.client.name;} // permet d'afficher le Titre de la page Edit avec le nom du Client
        );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.souscriptionGetVersion) {
      this.souscriptionGetVersion.unsubscribe();
    }
  }

  goBackToList() {
    // navigateByUrl n'utilise que des chemins absolus
    // this.router.navigateByUrl('/clients/list');
    this.router.navigate( ['../../list'], {relativeTo: this.activatedRoute});
  }

  updateClient() {
    this.clientsService.updateClient(this.client).subscribe(
      () => this.goBackToList()
    );
  }
}
