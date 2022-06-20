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
  //public id: number = 0;
  //public name: string = '';

  //public client: Client = {} as Client;

  public success = false;
  public failure = false;

  public formulaire!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ClientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.formulaire =
      this.formBuilder.group({
        id: [0, [Validators.required, Validators.maxLength(3)]],
        name: ['', [Validators.required, Validators.maxLength(25)]],
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        socialReason: [''],
        numDepartment: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]],
        numTel: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });
  }

  ajouter() {
    console.info(this.formulaire.value);
    this.ClientsService.addClient(
      this.formulaire.value as Client
    ).subscribe({
      next: () => { this.success = true; },
      error: () => { this.failure = true; }
    }
    );
  }

  goBackToList() {
    // navigateByUrl n'utilise que des chemins absolus
    // this.router.navigateByUrl('/clients/list');
    this.router.navigate(['/clients/list'], { relativeTo: this.activatedRoute });
  }
}
