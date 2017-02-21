import { Adjustment } from './Adjustment';
import { Address } from './Address';
import { Button } from './Button';
import { GenericElement, ListElement, ReceiptElement } from './element';
import { Summary } from './Summary';

export interface AttachmentBase {
  payload: {
    url: string;
  };
}

export interface AttachmentWithAudio extends AttachmentBase {
  type: 'audio';
}

export interface AttachmentWithFile extends AttachmentBase {
  type: 'file';
}

export interface AttachmentWithImage extends AttachmentBase {
  type: 'image';
}

export interface AttachmentWithVideo extends AttachmentBase {
  type: 'video';
}

export interface AttachmentWithButtonTemplate {
  template_type: 'button';
  text: string;
  buttons: Button[];
}

export interface AttachmentWithGenericTemplate {
  template_type: 'generic';
  elements: GenericElement[];
}

export interface AttachmentWithListTemplate {
  template_type: 'list';
  top_element_style?: 'large' | 'compact';
  elements: ListElement[];
  buttons?: Button[];
}

export interface AttachmentWithReceiptTemplate {
  template_type: 'receipt';
  recipient_name: string;
  merchant_name?: string;
  order_number: string;
  currency: string;
  payment_method: string;
  timestamp?: string;
  order_url?: string;
  elements?: ReceiptElement[];
  address?: Address;
  summary: Summary;
  adjustments?: Adjustment[];
}

export interface AttachmentWithTemplate {
  type: 'template';
  payload: AttachmentWithButtonTemplate | AttachmentWithGenericTemplate | AttachmentWithListTemplate |
           AttachmentWithReceiptTemplate;
}

export type Attachment = AttachmentWithImage | AttachmentWithAudio | AttachmentWithVideo |
                         AttachmentWithFile | AttachmentWithTemplate;

export interface ReusedAttachment {
  type: 'image' | 'audio' | 'video' | 'file';
  payload: {
    attachment_id: string;
  };
}
