import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageNewOrdersComponent } from './pages/page-new-orders/page-new-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageNewOrdersComponent,
    PageEditOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
}) export class OrdersModule { }
