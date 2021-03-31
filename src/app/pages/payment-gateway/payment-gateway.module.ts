import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentGatewayComponent } from './payment-gateway.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PaymentGatewayComponent,
  },
];

@NgModule({
  declarations: [PaymentGatewayComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PaymentGatewayModule {}
