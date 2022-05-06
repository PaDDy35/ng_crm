import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageNewClientsComponent } from './pages/page-new-clients/page-new-clients.component';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageNewClientsComponent,
    PageEditClientsComponent,
    PageListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    IconsModule,
    FormsModule, //Utilisation des [ngModel] dans les formulaires (page-new-clients)
    NgbModule,   //Utilisation des <ngb></ngb>
    TemplatesModule,
    SharedModule
  ]
}) export class ClientsModule { }
