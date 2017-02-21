export interface RecipientWithPhoneNumber {
  phone_number: string;
}

export interface RecipientWithID {
  id: string;
}

export type Recipient = RecipientWithPhoneNumber | RecipientWithID;
