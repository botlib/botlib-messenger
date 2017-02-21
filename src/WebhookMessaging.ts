import { WebhookAttachment } from './WebhookAttachment';
import { WebhookReferral } from './WebhookReferral';

export interface WebhookMessagingBase {
  sender: {
    id: string;
  };
  recipient: {
    id: string;
  };
  timestamp: number;
}

export interface WebhookMessagingWithReceivedText extends WebhookMessagingBase {
  message: {
    mid: string;
    seq: number;
    text: string;
    quick_reply: {
      payload: string;
    };
  };
}

export interface WebhookMessagingWithReceivedImage extends WebhookMessagingBase {
  message: {
    mid: string;
    seq: number;
    attachments: WebhookAttachment[];
  };
}

export type WebhookMessagingWithReceived = WebhookMessagingWithReceivedText | WebhookMessagingWithReceivedImage;

export interface WebhookMessagingWithDelivered extends WebhookMessagingBase {
  delivery: {
    mids: string[];
    watermark: number;
    seq: number;
  };
}

export interface WebhookMessagingWithRead extends WebhookMessagingBase {
  read: {
    watermark: number;
    seq: number;
  };
}

export interface WebhookMessagingWithPostback extends WebhookMessagingBase {
  postback: {
    payload: string;
    referral: WebhookReferral;
  };
}

export interface WebhookMessagingWithOptIn extends WebhookMessagingBase {
  optin: {
    ref: string;
  };
}

export interface WebhookMessagingWithReferral extends WebhookMessagingBase {
  referral: WebhookReferral;
}

export interface WebhookMessagingWithAccountLinkingLinked extends WebhookMessagingBase {
  account_linking: {
    status: 'linked';
    authorization_code: string;
  };
}

export interface WebhookMessagingWithAccountLinkingUnlinked extends WebhookMessagingBase {
  account_linking: {
    status: 'unlinked';
  };
}

export type WebhookMessagingWithAccountLinking = WebhookMessagingWithAccountLinkingLinked |
                                               WebhookMessagingWithAccountLinkingUnlinked;

export type WebhookMessaging = WebhookMessagingWithReceived | WebhookMessagingWithDelivered |
                             WebhookMessagingWithRead | WebhookMessagingWithPostback | WebhookMessagingWithOptIn |
                             WebhookMessagingWithReferral | WebhookMessagingWithAccountLinking;
