import { WebhookEntry } from './WebhookEntry';

export interface WebhookPayload {
  object: 'page';
  entry: WebhookEntry[];
}
