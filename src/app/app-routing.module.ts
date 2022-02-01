import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  // {
  //   path: 'bdkms',
  //   loadChildren: () =>
  //     import('./extensions/bdkms/bdkms.module').then((m) => m.BdkmsModule),
  // },
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
