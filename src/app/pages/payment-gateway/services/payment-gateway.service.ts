import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  mlCreatePlan,
  mlCreateSubscription,
  mlPlanResponseDetails,
} from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Basic ' + btoa('rzp_test_I8kNJbHC3cCRab:kNEFXCCz2kj5XkjOyyATKi1p'),
  }),
};

// const headers = new HttpHeaders()
//   .set('Content-Type', 'application/json')
// .set('rzp_test_I8kNJbHC3cCRab', 'kNEFXCCz2kj5XkjOyyATKi1p');
// .set(
//   'Authorization',
//   btoa('rzp_test_I8kNJbHC3cCRab:kNEFXCCz2kj5XkjOyyATKi1p')
// );

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
  public CreateSubscription(SubscriptionDetails: mlCreateSubscription) {
    const body = JSON.stringify(SubscriptionDetails);
    console.log(body);
    return this.http.post<any>('api/subscriptions', body, httpOptions);
  }
}
