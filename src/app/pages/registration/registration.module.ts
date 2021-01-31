import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ListComponent } from './components/list';
import { EntryComponent } from './components/entry';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component: RegistrationComponent}
]


@NgModule({
  declarations: [RegistrationComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
