import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MlPersonal } from '../../models/ml-personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  @ViewChild('frmPersonal') public frmPersonal: NgForm | any;

  public ObjPersonal: MlPersonal = new MlPersonal();
  @Input() EditData: MlPersonal = new MlPersonal();
  constructor(private nzMessageService: NzMessageService) {
    this.ObjPersonal = new MlPersonal();
    this.ObjPersonal = this.EditData;
  }

  ngOnInit(): void {


  }

  personalData(): MlPersonal {
    return this.ObjPersonal;
  }

  clear(): void {
    this.ObjPersonal = new MlPersonal();
  }

  Isvalid(): boolean {
    let isValid = this.validateFormData(this.frmPersonal);
    return isValid as boolean;
  }

  validateFormData(form: any) {
    (form as any).submitted = true;
    return this.isValidForm(form);
  }
  isValidForm(Form: NgForm) {
    if (!Form.submitted) return true;
    return Form.submitted && Form.valid;
  }
}
