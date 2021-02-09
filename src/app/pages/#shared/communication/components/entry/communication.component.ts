import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
})
export class CommunicationComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;

  @ViewChild('frmCommunication') public frmCommunication: NgForm | any;
  constructor(private nzMessageService: NzMessageService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {}

  communicationData(): void {
    if (this.validateFormData(this.frmCommunication)) {
      this.nzMessageService.success('Vaild');
    } else {
      this.nzMessageService.error('Invaild ! Please check form data');
    }
  }

  clear(): void {
    this.frmCommunication.resetForm();
  }

  validateFormData(form: any) {
    (form as any).submitted = true;
    return this.isValidForm(form);
  }
  isValidForm(Form: NgForm) {
    if (!Form.submitted) return true;
    return Form.submitted && Form.valid;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
