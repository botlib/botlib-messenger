import { Message } from './Message';
import { Recipient } from './Recipient';

export interface SendPayloadBase {
  recipient: Recipient;
  notification_type?: 'REGULAR' | 'SILENT_PUSH' | 'NO_PUSH';
}

export interface SendPayloadWithMessage extends SendPayloadBase {
  message: Message;
}

export interface SendPayloadWithSenderAction extends SendPayloadBase {
  sender_action: 'mark_seen' | 'typing_on' | 'typing_off';
}

export type SendPayload = SendPayloadWithMessage | SendPayloadWithSenderAction;
