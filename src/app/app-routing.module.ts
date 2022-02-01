import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
