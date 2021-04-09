import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentGatewayComponent } from './payment-gateway.component';

import { RouterModule, Routes } from '@angular/router';
import { NzMessageModule } from 'ng-zorro-antd/message';

export const routes: Routes = [
  {
    path: '',
    component: PaymentGatewayComponent,
  },
];

@NgModule({
  declarations: [PaymentGatewayComponent],
  imports: [CommonModule, NzMessageModule, RouterModule.forChild(routes)],
})
export class PaymentGatewayModule {}
