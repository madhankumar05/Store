import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import {
  mlCreatePlan,
  mlCreateSubscription,
  mlPlanResponseDetails,
  mlSubscriptionResDetails,
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
  public objPlanResponseDetails: mlPlanResponseDetails;
  public objPlanDetails: mlCreatePlan;
  public objSubscriptionDetails: mlCreateSubscription;
  public objSubscriptionResDetails: mlSubscriptionResDetails;

  /**
   * Razorpay Subscription Checkout Details
   */
  public options: any = {
    key: 'rzp_test_I8kNJbHC3cCRab',
    subscription_id: '',
    name: 'Test',
    description: 'Monthly Test Plan',
    image:
      'https://png.pngtree.com/png-vector/20190917/ourmid/pngtree-store-icon-in-line-style-png-image_1736161.jpg',
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
      name: 'Madhan Kumar',
      email: 'Madhankumar@example.com',
      contact: '+918124994722',
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
    //Assign subscription id
    this.options.subscription_id = this.objSubscriptionResDetails.id;

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
    this.objPlanDetails.period = 'monthly';
    this.objPlanDetails.interval = 1;
    this.objPlanDetails.item.name = 'Test plan - monthly';
    this.objPlanDetails.item.amount = 10000;
    this.objPlanDetails.item.currency = 'INR';
    this.objPlanDetails.item.description = 'Description for the test plan';
    this.objPlanDetails.notes.notes_key_1 = 'Tea, Earl Grey, Hot';
    this.objPlanDetails.notes.notes_key_2 = 'Tea, Earl Grey… decaf.';

    this.PaymentGateway.CreatePlan(this.objPlanDetails).subscribe((res) => {
      this.objPlanResponseDetails = new mlPlanResponseDetails();
      this.objPlanResponseDetails = res;
      this.cd.markForCheck();
      this.SubscribeNow(this.objPlanResponseDetails.id);
    });
  }

  /**
   * Subscribe Now Method or Function
   */
  public SubscribeNow(planID: string) {
    this.objSubscriptionDetails.plan_id = planID;
    this.objSubscriptionDetails.total_count = 12;
    this.PaymentGateway.CreateSubscription(
      this.objSubscriptionDetails
    ).subscribe((res) => {
      this.objSubscriptionResDetails = new mlSubscriptionResDetails();
      this.objSubscriptionResDetails = res;
      this.cd.markForCheck();
      this.initPay();
    });
  }

  /**
   * demo checkout
   */
  demoPay() {}
}
