export interface QuickReplyBase {
  payload: string;
  image_url?: string;
}

export interface QuickReplyWithText extends QuickReplyBase {
  content_type: 'text';
  title: string;
  payload: string;
}

export interface QuickReplyWithLocation extends QuickReplyBase {
  content_type: 'location';
}

export type QuickReply = QuickReplyWithText | QuickReplyWithLocation;
