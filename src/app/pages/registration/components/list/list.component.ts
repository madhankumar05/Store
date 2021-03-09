import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { RegistrationService } from '../../services/registration.service';
import { MlPersonal } from 'src/app/pages/#shared/personal/models/ml-personal';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  displayedColumns: string[] = ['Sno', 'Name', 'Gender', 'DOB', 'Mobile', 'Options'];
  dataSource = new MatTableDataSource<MlPersonal>();
  dataArray: Array<MlPersonal> = [];


  constructor(private srvRegister: RegistrationService, private cd: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {
    this.LoadPersonalDetails();
  }

  /**
   * LoadPersonalDetails
   */
  public LoadPersonalDetails(): void {

    this.srvRegister.PersonalData$.subscribe(d => {
      this.dataArray = d;
      this.dataSource.data = this.dataArray;
      this.cd.markForCheck();
    });
  }

  /**
   * EditDetails
   */
  public EditDetails(i: number): void {
    let EditData: MlPersonal = this.dataArray[i];
    this.srvRegister.Mode.next({ mode: 'ENTRY', data: EditData });
    this.router.navigateByUrl('/registration');
  }

  /**
   * DeleteDetails
   */
  public DeleteDetails(i: number): void {
    // this.dataSource.data.splice(i, 1);
    this.dataArray.splice(i, 1);
    this.dataSource = new MatTableDataSource<MlPersonal>(this.dataArray);
    this.srvRegister.PersonalData.next(this.dataArray);
    this.cd.markForCheck();
    this.LoadPersonalDetails();
  }
}
