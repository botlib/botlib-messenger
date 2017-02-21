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
