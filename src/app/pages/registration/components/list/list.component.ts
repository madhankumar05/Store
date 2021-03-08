import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { RegistrationService } from '../../services/registration.service';
import { MlPersonal } from 'src/app/pages/#shared/personal/models/ml-personal';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  displayedColumns: string[] = ['Sno', 'Name', 'Gender', 'DOB', 'Mobile', 'Options'];
  dataSource = new MatTableDataSource<MlPersonal>();



  constructor(private srvRegister: RegistrationService, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.LoadPersonalDetails();
  }

  /**
   * LoadPersonalDetails
   */
  public LoadPersonalDetails(): void {

    this.srvRegister.PersonalData$.subscribe(d => {
      this.dataSource.data = d;
      this.cd.markForCheck();
    });
  }

  /**
   * EditDetails
   */
  public EditDetails(i: number): void {
    // let EditData: MlPersonal = this.PersonalData[i];
    // console.log(EditData);
  }

  /**
   * DeleteDetails
   */
  public DeleteDetails(i: number): void {
    this.dataSource.data.splice(i, 1);
    this.dataSource = new MatTableDataSource<MlPersonal>(this.dataSource.data);
    this.srvRegister.PersonalData.next(this.dataSource.data);
    this.cd.markForCheck();
    this.LoadPersonalDetails();
  }
}
