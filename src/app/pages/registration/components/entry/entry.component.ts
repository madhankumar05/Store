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
  constructor(public srvRegister: RegistrationService, public srvMessage: NzMessageService) {

  }

  ngOnInit(): void {
    this.srvRegister.PersonalData$.subscribe(d => {
      this.data = d;
      console.log(this.data);
    });

  }
  cancel(): void { }

  confirm(): void {
    if (this.Personal.Isvalid()) {
      this.objData = this.Personal.personalData();
      this.data.push(this.objData);
      this.srvRegister.PersonalData.next(this.data);
      this.clearform();
    } else {
      this.srvMessage.error('Some input fields is missing !');
    }

  }
  clearform(): void {
    this.objData = new MlPersonal();
    this.Personal.clear();
  }
}
