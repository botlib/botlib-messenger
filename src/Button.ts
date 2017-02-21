export interface URLButtonWithoutTitle {
  type: 'web_url';
  url: string;
  webview_height_ratio?: string;
  messenger_extensions?: boolean;
  fallback_url?: string;
}

export interface URLButton extends URLButtonWithoutTitle {
  title: string;
}

export interface PostbackButton {
  type: 'postback';
  title: string;
  payload: string;
}

export interface CallButton {
  type: 'phone_number';
  title: string;
  payload: string;
}

export interface ShareButton {
  type: 'element_share';
  title: string;
}

export interface LogInButton {
  type: 'account_link';
  url: string;
}

export interface LogOutButton {
  type: 'account_unlink';
}

export type Button = URLButton | PostbackButton | CallButton | ShareButton | LogInButton | LogOutButton;
