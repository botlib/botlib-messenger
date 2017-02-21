import { WebhookMessaging } from './WebhookMessaging';

export interface WebhookEntry {
  id: string;
  time: number;
  messaging: WebhookMessaging[];
}
