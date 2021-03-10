import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommunicationComponent } from 'src/app/pages/#shared/communication/components/entry/communication.component';
import { PersonalComponent } from 'src/app/pages/#shared/personal/components/entry/personal.component';
import { MlPersonal } from 'src/app/pages/#shared/personal/models/ml-personal';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  @ViewChild('Personal') Personal!: PersonalComponent;
  @ViewChild('Communication') Communication!: CommunicationComponent;

  objData: MlPersonal = new MlPersonal();
  public data: MlPersonal[] = [];
  editableData: MlPersonal = new MlPersonal();

  constructor(
    public srvRegister: RegistrationService,
    public srvMessage: NzMessageService
  ) {}

  ngOnInit(): void {
    this.srvRegister.PersonalData$.subscribe((d) => {
      this.data = d;
    });
    this.GetEditData();
  }

  /**
   * GetEditData
   */
  public GetEditData() {
    this.srvRegister.Mode$.subscribe((d) => {
      if (d.mode === 'ENTRY') {
        this.editableData = d.data;
      }
    });
  }
  cancel(): void {}

  confirm(): void {
    if (this.Personal.Isvalid()) {
      this.objData = this.Personal.personalData();

      if (this.IsExistingDetail(this.objData.id)) {
        let index = this.data.findIndex((fi) => fi.id === this.objData.id);
        this.data[index] = this.objData;
        this.srvRegister.PersonalData.next(this.data);
        this.clearform();
      } else {
        this.objData.id = Math.random().toString(36).substr(2, 9);
        this.data.push(this.objData);
        this.srvRegister.PersonalData.next(this.data);
        this.clearform();
      }
    } else {
      this.srvMessage.error('Some input fields is missing !');
    }
  }
  clearform(): void {
    this.objData = new MlPersonal();
    this.Personal.clear();
  }

  IsExistingDetail(id: string): boolean {
    let findData = this.data.find((f) => f.id === id);
    if (findData !== undefined) {
      return true;
    }
    return false;
  }
}
