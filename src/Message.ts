import { Attachment } from './Attachment';
import { QuickReply } from './QuickReply';

export interface MessageBase {
  quick_replies?: QuickReply[];
  metadata?: string;
}

export interface MessageWithText extends MessageBase {
  text: string;
}

export interface MessageWithAttachment extends MessageBase {
  attachment: Attachment;
}

export type Message = MessageWithText | MessageWithAttachment;
