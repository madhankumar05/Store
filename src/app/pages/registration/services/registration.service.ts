import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MlPersonal } from '../../#shared/personal/models/ml-personal';
import { RegistrationMode } from '../models/ml-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public Mode = new BehaviorSubject<RegistrationMode>({ mode: 'ENTRY' })
  public Mode$ = this.Mode.asObservable();
  public PersonalData = new BehaviorSubject<MlPersonal[]>([]);
  public PersonalData$ = this.PersonalData.asObservable();
  constructor() { }
}
