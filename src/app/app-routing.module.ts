import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/page-sign-in/page-sign-in.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  {path: 'sign-in', component: PageSignInComponent}
  , {path: 'orders', loadChildren:
    () => import('./orders/orders.module').then( m => m.OrdersModule)}
  , {path: 'admin', loadChildren:
    () => import('./users/users.module').then (m=>m.UsersModule)}
  , {path: 'clients', loadChildren:
    () => import('./clients/clients.module').then (m=>m.ClientsModule)}
  , {path: 'login', loadChildren:
    () => import('./login/login.module').then(m=>m.LoginModule)}
  , {path:'**', redirectTo: '/sign-in', pathMatch:'full'}
  ]; // loadChildren permet l'utilisation du .forChild pour les autres component.routing.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) export class AppRoutingModule { }
