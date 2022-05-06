import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public firstName: string = '';
  public souscriptionGetVersion: Subscription | null = null;

  public success = false;
  public failure = false;
  public formulaire!: FormGroup;
   

  constructor(
      private activatedRoute: ActivatedRoute,
      private clientsService: ClientsService,
      private router: Router,
      private versionService: VersionService,
      private formBuilder:  FormBuilder)  { }

  getClientId() {
    return this.clientId;
  }

  initForm(client: Client): void {
    this.formulaire = this.formBuilder.group({
        id: [client.id, Validators.min(10)/*, Validators.pattern(/[0-9]/)*/],
        name: [client.name, [Validators.minLength(5), Validators.required]],
        firstName: [client.firstname, [Validators.minLength(3), Validators.required]],
        socialreason: [client.socialReason, [ Validators.required]],
        numdepartment: [client.numDepartment, [Validators.maxLength(3)]],
        numtele: [client.numTel, [Validators.maxLength(10), Validators.minLength(10)]],
        
    });
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
          client => {
            this.client = client;
            this.clientName = this.client.name;
            this.firstName = this.client.firstname;
           this.initForm(client);
          } // permet d'afficher le Titre de la page Edit avec le nom du Client
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
