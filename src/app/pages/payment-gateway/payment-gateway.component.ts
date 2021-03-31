import { Component, NgZone, OnInit } from '@angular/core';
import { mlCreatePlan, mlCreateSubscription } from './models';
import {
  ICustomWindow,
  PaymentGatewayService,
} from './services/payment-gateway.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
  providers: [PaymentGatewayService],
})
export class PaymentGatewayComponent implements OnInit {
  private _window: ICustomWindow;
  public rzp: any;

  // public options: any = {
  //   key: 'rzp_test_I8kNJbHC3cCRab', // add razorpay key here
  //   name: 'The Swag Coder',
  //   description: 'Shopping',
  //   amount: 100, // razorpay takes amount in paisa
  //   prefill: {
  //     name: 'The Swag Coder',
  //     email: '', // add your email id
  //   },
  //   notes: {},
  //   theme: {
  //     color: '#3880FF',
  //   },
  //   handler: this.paymentHandler.bind(this),
  //   modal: {
  //     ondismiss: () => {
  //       this.zone.run(() => {
  //         alert('failure');
  //         // add current page routing if payment fails
  //       });
  //     },
  //     escape: false,
  //   },
  // };

  public options: any = {
    key: 'rzp_test_I8kNJbHC3cCRab',
    subscription_id: 'sub_Gs9ZNKtjSSpUDp',
    name: 'Acme Corp.',
    description: 'Monthly Test Plan',
    image: '/your_logo.png',
    handler: function (response) {
      console.log(
        response.razorpay_payment_id +
          '-' +
          response.razorpay_subscription_id +
          '-' +
          response.razorpay_signature
      );

      alert(response.razorpay_payment_id),
        alert(response.razorpay_subscription_id),
        alert(response.razorpay_signature);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '+919876543210',
    },
    notes: {
      note_key_1: 'Tea. Earl Grey. Hot',
      note_key_2: 'Make it so.',
    },
    theme: {
      color: '#F37254',
    },
  };

  public objPlanDetails: mlCreatePlan;
  public objSubscriptionDetails: mlCreateSubscription;

  constructor(private zone: NgZone, private winRef: PaymentGatewayService) {
    this._window = this.winRef.nativeWindow;
    this.objPlanDetails = new mlCreatePlan();
    this.objSubscriptionDetails = new mlCreateSubscription();
  }

  ngOnInit(): void {}

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  /**
   * Payment success callback method or function
   */
  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
      alert('success');
    });
  }

  /**
   * Create Plan
   */
  public btnCreatePlan() {
    this.objPlanDetails.period = 'daily';
    this.objPlanDetails.interval = 1;
    this.objPlanDetails.item.name = 'Test plan - daily';
    this.objPlanDetails.item.amount = 2;
    this.objPlanDetails.item.currency = 'INR';
    this.objPlanDetails.item.description = 'Description for the test plan';
    this.objPlanDetails.notes.notes_key_1 = 'note 1';
    this.objPlanDetails.notes.notes_key_2 = 'note 2';

    console.log(this.objPlanDetails);
    this.winRef.CreatePlan(this.objPlanDetails).subscribe((res) => {
      console.log(res);
    });
  }

  /**
   * Subscribe Now method or function
   */
  public btnSubscribeNow() {
    this.objSubscriptionDetails.plan_id = 'daily';
    this.objSubscriptionDetails.total_count = 1;

    console.log(this.objSubscriptionDetails);
    this.winRef
      .CreateSubscription(this.objSubscriptionDetails)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
