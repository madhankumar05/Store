import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ListComponent } from './components/list';
import { EntryComponent } from './components/entry';
import { RouterModule, Routes } from '@angular/router';

// NG ZORRO COMPONENTS

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
]


@NgModule({
  declarations: [RegistrationComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    NzGridModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
