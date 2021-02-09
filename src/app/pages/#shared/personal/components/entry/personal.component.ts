import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  @ViewChild('frmPersonal') public frmPersonal: NgForm | any;
  constructor(private nzMessageService: NzMessageService) {}

  ngOnInit(): void {}

  personalData(): void {
    if (this.validateFormData(this.frmPersonal)) {
      this.nzMessageService.success('Vaild');
    } else {
      this.nzMessageService.error('Invaild ! Please check form data');
    }
  }

  clear(): void {
    this.frmPersonal.resetForm();
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
