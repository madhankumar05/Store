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
