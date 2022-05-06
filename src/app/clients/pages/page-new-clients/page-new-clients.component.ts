import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/Models/Client-M';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-new-clients',
  templateUrl: './page-new-clients.component.html',
  styleUrls: ['./page-new-clients.component.scss']
}) export class PageNewClientsComponent implements OnInit {


  // L'UTILISATION DU FORMBUILDER les enlève
  // public id : number = 0;
  // public name: string ='';

  public client: Client = {} as Client;

  public success=false;
  public failure=false;

  public formulaire!: FormGroup;

  constructor(
        private formBuilder: FormBuilder,
        private ClientsService: ClientsService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      id : [0, [Validators.min(2),Validators.pattern(/^[0-9]*$/)]],
      name: ['', [Validators.required]]
    });
  }

  ajouter() {
    console.info(this.formulaire.value);
    this.ClientsService.addClient(
        this.formulaire.value as Client
    ).subscribe({
      next: () => {this.success = true;},
      error: () => {this.failure = true;}
      }
    );
  }

  goBackToList () {
    // navigateByUrl n'utilise que des chemins absolus
    // this.router.navigateByUrl('/clients/list');
    this.router.navigate( ['/clients/list'], {relativeTo: this.activatedRoute});
  }
}
