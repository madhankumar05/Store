import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './components/entry/communication.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommunicationComponent],
  imports: [
    CommonModule, NzGridModule, NzDividerModule, NzButtonModule,
    NzIconModule, NzDropDownModule, NzDatePickerModule, NzFormModule,
    NzInputModule, NzInputNumberModule, FormsModule, NzSelectModule
  ],
  exports: [CommunicationComponent],
})
export class CommunicationModule { }
