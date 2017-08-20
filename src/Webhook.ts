export interface WebhookAttachmentNonLocation {
  type: 'image' | 'audio' | 'video' | 'file';
  payload: {
    url: string;
  };
}

export interface WebhookAttachmentLocation {
  type: 'location';
  payload: {
    coordinates: {
      lat: number;
      long: number;
    };
  };
}

export type WebhookAttachment = WebhookAttachmentNonLocation | WebhookAttachmentLocation;

export interface WebhookReferral {
  ref: string;
  source: string;
  type: string;
}

export interface WebhookEventBaseWithoutSender {
  recipient: {
    id: string;
  };
  timestamp: number;
}

export interface WebhookEventBaseWithSender extends WebhookEventBaseWithoutSender {
  sender: {
    id: string;
  };
}

export type WebhookEventBase = WebhookEventBaseWithoutSender | WebhookEventBaseWithSender;

export interface WebhookEventAccountLinkingWithLinked extends WebhookEventBaseWithSender {
  account_linking: {
    status: 'linked';
    authorization_code: string;
  };
}

export interface WebhookEventAccountLinkingWithUnlinked extends WebhookEventBaseWithSender {
  account_linking: {
    status: 'unlinked';
  };
}

export type WebhookEventAccountLinking = WebhookEventAccountLinkingWithLinked |
                                         WebhookEventAccountLinkingWithUnlinked;

export interface WebhookEventMessageWithText extends WebhookEventBaseWithSender {
  message: {
    mid: string;
    seq: number;
    text: string;
    quick_reply: {
      payload: string;
    };
  };
}

export interface WebhookEventMessageWithImage extends WebhookEventBaseWithSender {
  message: {
    mid: string;
    seq: number;
    attachments: WebhookAttachment[];
  };
}

export type WebhookEventMessage = WebhookEventMessageWithText | WebhookEventMessageWithImage;

export interface WebhookEventMessageDelivered extends WebhookEventBaseWithSender {
  delivery: {
    mids: string[];
    watermark: number;
    seq: number;
  };
}

export interface WebhookEventMessageRead extends WebhookEventBaseWithSender {
  read: {
    watermark: number;
    seq: number;
  };
}

export interface WebhookEventPluginOptIn extends WebhookEventBaseWithSender {
  optin: {
    ref: string;
  };
}

export interface WebhookEventPolicyEnforcement extends WebhookEventBaseWithoutSender {
  'policy-enforcement': {
    action: 'block' | 'unblock';
    reason: string;
  };
}

export interface WebhookEventPostback extends WebhookEventBaseWithSender {
  postback: {
    payload: string;
    referral: WebhookReferral;
  };
}

export interface WebhookEventReferral extends WebhookEventBaseWithSender {
  referral: WebhookReferral;
}

export type WebhookEvent = WebhookEventAccountLinking | WebhookEventMessage | WebhookEventMessageDelivered |
                           WebhookEventMessageRead | WebhookEventPluginOptIn | WebhookEventPolicyEnforcement |
                           WebhookEventPostback | WebhookEventReferral;

export interface WebhookEntry {
  id: string;
  time: number;
  messaging: WebhookEvent[];
}

export interface WebhookPayload {
  object: 'page';
  entry: WebhookEntry[];
}
