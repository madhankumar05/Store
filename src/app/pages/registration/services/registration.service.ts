import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MlPersonal } from '../../#shared/personal/models/ml-personal';
import { RegistrationMode } from '../models/ml-registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  public Mode = new BehaviorSubject<RegistrationMode>({ mode: 'ENTRY' });
  public Mode$ = this.Mode.asObservable();
  public PersonalData = new BehaviorSubject<MlPersonal[]>([]);
  public PersonalData$ = this.PersonalData.asObservable();
  configUrl = '/api/items';
  configUrlTemp = 'https://localhost:5001/items';
  constructor(private http: HttpClient) {
    this.getConfig().subscribe((d) => {
      console.log(d);
    });
  }

  getConfig(): Observable<any> {
    console.log(this.configUrlTemp);

    return this.http.get(this.configUrlTemp);
  }
}
