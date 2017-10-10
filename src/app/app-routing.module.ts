import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './admin/section/dashboard/dashboard.component';
import { AppointComponent } from './admin/section/appoint/appoint.component';
import { OrdersComponent } from './admin/section/orders/orders.component';
import { SalesComponent } from './admin/section/sales/sales.component';
import { TechnicianComponent } from './admin/section/technician/technician.component';
import { CommodityComponent } from './admin/section/commodity/commodity.component';
import { Code404Component } from './admin/section/code404/code404.component';

const routes: Routes = [
	// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '', component: DashboardComponent },
	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'appoint', component: AppointComponent },
  	{ path: 'orders', component: OrdersComponent },
  	{ path: 'sales', component: SalesComponent },
  	{ path: 'technician', component: TechnicianComponent },
  	{ path: 'commodity', component: CommodityComponent },
  	{ path: '**', component: Code404Component }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {

}