import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ListComponent } from './components/list';
import { EntryComponent } from './components/entry';
import { RouterModule, Routes } from '@angular/router';


import { CommunicationModule } from '../#shared/communication/communication.module';
import { PersonalModule } from '../#shared/personal/personal.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
]


@NgModule({
  declarations: [RegistrationComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    CommunicationModule,
    PersonalModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
