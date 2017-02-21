import { Button, URLButtonWithoutTitle } from './Button';

export interface ElementBase {
  title: string;
  subtitle?: string;
}

export interface GenericElementBase extends ElementBase {
  buttons?: Button[];
  image_url?: string;
}

export interface GenericElementWithItemURL extends GenericElementBase {
  item_url?: string;
}

export interface GenericElementWithDefaultAction extends GenericElementBase {
  default_action?: URLButtonWithoutTitle;
}

export type GenericElement = GenericElementWithItemURL | GenericElementWithDefaultAction;

export interface ListElement extends ElementBase {
  default_action?: URLButtonWithoutTitle;
  buttons?: Button[];
}

export interface ReceiptElement extends ElementBase {
  quantity?: number;
  price: number;
  currency?: string;
  image_url?: string;
}
