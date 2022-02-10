import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldierDashboardComponent } from './core/views/soldier-dashboard/soldier-dashboard.component';

const routes: Routes = [
  // {
  //   path: 'customers',
  //   loadChildren: () =>
  //     import('./extensions/customers/customers.module').then(
  //       (m) => m.CustomersModule
  //     ),
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('./extensions/orders/orders.module').then((m) => m.OrdersModule),
  // },
  {
    path: 'other',
    loadChildren: () =>
      import('./modules/other/other.module').then((m) => m.OtherModule),
  },
  {
    path: 'testing',
    component: SoldierDashboardComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
