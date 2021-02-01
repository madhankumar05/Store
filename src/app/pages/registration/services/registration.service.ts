import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegistrationMode } from '../models/ml-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 public Mode = new BehaviorSubject<RegistrationMode>({mode: 'ENTRY'})
 public Mode$ = this.Mode.asObservable();
  constructor() { }
}
