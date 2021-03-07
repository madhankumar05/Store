import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RegistrationService } from '../../services/registration.service';
import { MlPersonal } from 'src/app/pages/#shared/personal/models/ml-personal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Gender', 'DOB', 'Mobile'];
  dataSource: any;


  constructor(private srvRegister: RegistrationService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.srvRegister.PersonalData$.subscribe(d => {
      this.dataSource = d;
      this.cd.markForCheck();
    });
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const xyz: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
];