import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AsideComponent } from './admin/aside/aside.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SectionComponent } from './admin/section/section.component';
import { DashboardComponent } from './admin/section/dashboard/dashboard.component';
import { AppointComponent } from './admin/section/appoint/appoint.component';
import { OrdersComponent } from './admin/section/orders/orders.component';
import { SalesComponent } from './admin/section/sales/sales.component';
import { TechnicianComponent } from './admin/section/technician/technician.component';
import { CommodityComponent } from './admin/section/commodity/commodity.component';

import { AppRoutingModule } from './app-routing.module';
import { Code404Component } from './admin/section/code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    SectionComponent,
    DashboardComponent,
    AppointComponent,
    OrdersComponent,
    SalesComponent,
    TechnicianComponent,
    CommodityComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
