import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AppointComponent } from './admin/appoint/appoint.component';

const routes:Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
  	{ path: 'appoint',  component: AppointComponent },
  	{ path: 'orders',  component: OrdersComponent },
  	{ path: 'sales',  component: SalesComponent },
  	{ path: 'technician',  component: TechnicianComponent },
  	{ path: 'commodity',  component: CommodityComponent }
]