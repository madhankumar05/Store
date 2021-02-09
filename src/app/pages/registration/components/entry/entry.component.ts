import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationComponent } from 'src/app/pages/#shared/communication/components/entry/communication.component';
import { PersonalComponent } from 'src/app/pages/#shared/personal/components/entry/personal.component';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  @ViewChild('Personal') Personal!: PersonalComponent;
  @ViewChild('Communication') Communication!: CommunicationComponent;
  constructor() {}

  ngOnInit(): void {}
  cancel(): void {}

  confirm(): void {
    this.Personal.personalData();
    this.Communication.communicationData();
  }
  clearform(): void {
    this.Personal.clear();
    this.Communication.clear();
  }
}
