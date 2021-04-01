import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import {
  mlCreatePlan,
  mlCreateSubscription,
  mlPlanResponseDetails,
} from './models';
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
  public PlanResponseDetails: mlPlanResponseDetails;
  public objPlanDetails: mlCreatePlan;
  public objSubscriptionDetails: mlCreateSubscription;

  /**
   * Razorpay Subscription Checkout Details
   */
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

  constructor(
    private zone: NgZone,
    private PaymentGateway: PaymentGatewayService,
    private cd: ChangeDetectorRef
  ) {
    this._window = this.PaymentGateway.nativeWindow;
    this.objPlanDetails = new mlCreatePlan();
    this.objSubscriptionDetails = new mlCreateSubscription();
  }

  ngOnInit(): void {}

  initPay(): void {
    this.rzp = new this.PaymentGateway.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  /**
   * Payment Success Callback Method or Function
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
    this.objPlanDetails.period = 'weekly';
    this.objPlanDetails.interval = 1;
    this.objPlanDetails.item.name = 'Test plan - Weekly';
    this.objPlanDetails.item.amount = 100;
    this.objPlanDetails.item.currency = 'INR';
    this.objPlanDetails.item.description = 'Description for the test plan';
    this.objPlanDetails.notes.notes_key_1 = 'Tea, Earl Grey, Hot';
    this.objPlanDetails.notes.notes_key_2 = 'Tea, Earl Grey… decaf.';

    this.PaymentGateway.CreatePlan(this.objPlanDetails).subscribe((res) => {
      this.PlanResponseDetails = new mlPlanResponseDetails();
      this.PlanResponseDetails = res;
      this.cd.markForCheck();
    });
  }

  /**
   * Subscribe Now Method or Function
   */
  public btnSubscribeNow() {
    this.objSubscriptionDetails.plan_id = 'daily';
    this.objSubscriptionDetails.total_count = 1;

    console.log(this.objSubscriptionDetails);
    this.PaymentGateway.CreateSubscription(
      this.objSubscriptionDetails
    ).subscribe((res) => {
      console.log(res);
    });
  }
}
