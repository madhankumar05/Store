import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  mlCreatePlan,
  mlCreateSubscription,
  mlPlanResponseDetails,
  mlSubscriptionResDetails,
} from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Basic ' + btoa('rzp_test_I8kNJbHC3cCRab:kNEFXCCz2kj5XkjOyyATKi1p'),
  }),
};

export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}
function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentGatewayService {
  constructor(private http: HttpClient) {}

  get nativeWindow(): ICustomWindow {
    return getWindow();
  }

  /**
   * Create Plan
   */
  public CreatePlan(
    planDetails: mlCreatePlan
  ): Observable<mlPlanResponseDetails> {
    const data = JSON.parse(JSON.stringify(planDetails));

    let res = this.http.post<mlPlanResponseDetails>(
      'api/plans',
      data,
      httpOptions
    );

    return res;
  }

  /**
   * Create Subscription { headers: headers }
   */
  public CreateSubscription(
    SubscriptionDetails: mlCreateSubscription
  ): Observable<mlSubscriptionResDetails> {
    const body = JSON.parse(JSON.stringify(SubscriptionDetails));
    return this.http.post<mlSubscriptionResDetails>(
      'api/subscriptions',
      body,
      httpOptions
    );
  }
}
