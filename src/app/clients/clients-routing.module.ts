import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from '../orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageNewClientsComponent } from './pages/page-new-clients/page-new-clients.component';

const routes: Routes = [
  {path: 'list', component: PageListClientsComponent}
  , {path: 'new', component: PageNewClientsComponent}
  , {path: 'edit/:id', component: PageEditClientsComponent}
  , {path: '', redirectTo: 'list', pathMatch: 'full'}
  , {path: 'orders/list', component:PageListOrdersComponent}
  , {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) export class ClientsRoutingModule { }
