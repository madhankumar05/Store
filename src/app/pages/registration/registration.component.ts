import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RegistrationService } from './services/registration.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  mode!: string;

  constructor(
    private SrvRegistration: RegistrationService,
    private cd: ChangeDetectorRef,
    private nzMessageService: NzMessageService
  ) { }
  ngOnInit(): void {
    this.SrvRegistration.Mode$.pipe().subscribe(s => {
      this.mode = s.mode;
      console.log(this.mode);
      this.cd.markForCheck();
    });
  }
}
