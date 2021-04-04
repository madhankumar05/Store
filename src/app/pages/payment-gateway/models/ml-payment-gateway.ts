/**
 * Create Plan
 */
export class mlCreatePlan {
  period: string;
  interval: number;
  item: mlItem = new mlItem();
  notes: mlNotes = new mlNotes();
}
export class mlItem {
  name: string;
  amount: number;
  currency: string;
  description: string;
}
export class mlNotes {
  notes_key_1: string;
  notes_key_2: string;
}

/**
 * Create Subscription
 */

export class mlCreateSubscription {
  plan_id: string;
  total_count: number;
  quantity: number;
  customer_notify: number;
  start_at: number;
  expire_by: number;
  addons: mlItem[] = [];
  offer_id: string;
  objNotes: mlNotes = new mlNotes();
}

/**
 * Plan API response details
 */
export class mlPlanResponseDetails {
  id: string;
  entity: string;
  interval: number;
  period: string;
  item: mlResponseItem = new mlResponseItem();
  notes: mlNotes = new mlNotes();
  created_at: number;
}

export class mlResponseItem extends mlItem {
  id: string;
  active: boolean;
  unit_amount: number;
  type: string;
  unit: any;
  tax_inclusive: boolean;
  hsn_code: any;
  sac_code: any;
  tax_rate: any;
  tax_id: any;
  tax_group_id;
  created_at: number;
  updated_at: number;
}

export class mlSubscriptionResDetails {
  id: string;
  entity: string;
  plan_id: string;
  status: string;
  current_start: number;
  current_end: number;
  ended_at: number;
  quantity: number;
  notes: mlNotes = new mlNotes();
  charge_at: number;
  start_at: number;
  end_at: number;
  auth_attempts: number;
  total_count: number;
  paid_count: number;
  customer_notify: boolean;
  created_at: number;
  expire_by: number;
  short_url: string;
  has_scheduled_changes: boolean;
  change_scheduled_at: number;
  source: string;
  offer_id: string;
  remaining_count: number;
}
