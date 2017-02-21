import axios from 'axios';

import { SendPayload } from './SendPayload';
import { UserProfile } from './UserProfile';

const _options = new WeakMap<Client, ClientOptions>();

export interface ClientOptions {
  pageAccessToken: string;
}

export class Client {
  constructor(options: ClientOptions) {
    _options.set(this, options);
  }

  // Send an image using the Send API.
  async sendImageMessage(options: {
    imageURL: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            url: options.imageURL,
          },
          type: 'image',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a GIF using the Send API.
  async sendGIFMessage(options: {
    imageURL: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            url: options.imageURL,
          },
          type: 'image',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send audio using the Send API.
  async sendAudioMessage(options: {
    audioURL: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            url: options.audioURL,
          },
          type: 'audio',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a video using the Send API.
  async sendVideoMessage(options: {
    recipientID: string,
    videoURL: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            url: options.videoURL,
          },
          type: 'video',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a file using the Send API.
  async sendFileMessage(options: {
    fileURL: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            url: options.fileURL,
          },
          type: 'file',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a text message using the Send API.
  async sendTextMessage(options: {
    messageText: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        metadata: 'DEVELOPER_DEFINED_METADATA',
        text: options.messageText,
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a button message using the Send API.
  async sendButtonMessage(options: {
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            buttons: [
              {
                title: 'Open Web URL',
                type: 'web_url',
                url: 'https://www.report.io',
                webview_height_ratio: 'compact',
              }, {
                payload: 'DEVELOPER_DEFINED_PAYLOAD',
                title: 'Trigger Postback',
                type: 'postback',
              }, {
                payload: '+16505551234',
                title: 'Call Phone Number',
                type: 'phone_number',
              },
            ],
            template_type: 'button',
            text: 'This is test text',
          },
          type: 'template',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a Structured Message (Generic Message type) using the Send API.
  async sendGenericMessage(options: {
    imageURLs: string[],
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            elements: [
              {
                buttons: [
                  {
                    title: 'Open Web URL',
                    type: 'web_url',
                    url: 'https://www.oculus.com/en-us/rift/',
                  },
                  {
                    payload: 'Payload for first bubble',
                    title: 'Call Postback',
                    type: 'postback',
                  },
                ],
                image_url: options.imageURLs[0],
                item_url: 'https://www.oculus.com/en-us/rift/',
                subtitle: 'Next-generation virtual reality',
                title: 'rift',
              },
              {
                buttons: [
                  {
                    title: 'Open Web URL',
                    type: 'web_url',
                    url: 'https://www.oculus.com/en-us/touch/',
                  }, {
                    payload: 'Payload for second bubble',
                    title: 'Call Postback',
                    type: 'postback',
                  },
                ],
                image_url: options.imageURLs[1],
                item_url: 'https://www.oculus.com/en-us/touch/',
                subtitle: 'Your Hands, Now in VR',
                title: 'touch',
              },
            ],
            template_type: 'generic',
          },
          type: 'template',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a receipt message using the Send API.
  async sendReceiptMessage(options: {
    imageURLs: string[],
    recipientID: string,
  }) {
    // Generate a random receipt ID as the API requires a unique ID
    const receiptID = `order ${Math.floor(Math.random() * 1000)}`;
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            address: {
              city: 'Menlo Park',
              country: 'US',
              postal_code: '94025',
              state: 'CA',
              street_1: '1 Hacker Way',
              street_2: '',
            },
            adjustments: [
              {
                amount: -50,
                name: 'New Customer Discount',
              }, {
                amount: -100,
                name: '$100 Off Coupon',
              },
            ],
            currency: 'USD',
            elements: [
              {
                currency: 'USD',
                image_url: options.imageURLs[0],
                price: 599.00,
                quantity: 1,
                subtitle: 'Includes: headset, sensor, remote',
                title: 'Oculus Rift',
              },
              {
                currency: 'USD',
                image_url: options.imageURLs[1],
                price: 99.99,
                quantity: 1,
                subtitle: 'Frost White',
                title: 'Samsung Gear VR',
              },
            ],
            order_number: receiptID,
            payment_method: 'Visa 1234',
            recipient_name: 'Peter Chang',
            summary: {
              shipping_cost: 20.00,
              subtotal: 698.99,
              total_cost: 626.66,
              total_tax: 57.67,
            },
            template_type: 'receipt',
            timestamp: '1428444852',
          },
          type: 'template',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a message with Quick Reply buttons.
  async sendQuickReply(options: {
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        quick_replies: [
          {
            content_type: 'text',
            payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION',
            title: 'Action',
          },
          {
            content_type: 'text',
            payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY',
            title: 'Comedy',
          },
          {
            content_type: 'text',
            payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA',
            title: 'Drama',
          },
        ],
        text: 'What\'s your favorite movie genre?',
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  // Send a read receipt to indicate the message has been read
  async sendReadReceipt(options: {
    recipientID: string,
  }) {
    if (process.env.DEBUG) {
      console.log('Sending a read receipt to mark message as seen');
    }
    const payload: SendPayload = {
      recipient: {
        id: options.recipientID,
      },
      sender_action: 'mark_seen',
    };
    return this._send(payload);
  }

  // Turn typing indicator on
  async sendTypingOn(options: {
    recipientID: string,
  }) {
    if (process.env.DEBUG) {
      console.log('Turning typing indicator on');
    }
    const payload: SendPayload = {
      recipient: {
        id: options.recipientID,
      },
      sender_action: 'typing_on',
    };
    return this._send(payload);
  }

  // Turn typing indicator off
  async sendTypingOff(options: {
    recipientID: string,
  }) {
    if (process.env.DEBUG) {
      console.log('Turning typing indicator off');
    }
    const payload: SendPayload = {
      recipient: {
        id: options.recipientID,
      },
      sender_action: 'typing_off',
    };
    return this._send(payload);
  }

  // Send a message with the account linking call-to-action
  async sendAccountLinking(options: {
    authorizeURL: string,
    recipientID: string,
  }) {
    const payload: SendPayload = {
      message: {
        attachment: {
          payload: {
            buttons: [
              {
                type: 'account_link',
                url: options.authorizeURL,
              },
            ],
            template_type: 'button',
            text: 'Welcome. Link your account.',
          },
          type: 'template',
        },
      },
      recipient: {
        id: options.recipientID,
      },
    };
    return this._send(payload);
  }

  async getUserProfile(options: {
    userID: string,
  }): Promise<UserProfile> {
    const { pageAccessToken } = _options.get(this);
    const res = await axios({
      method: 'get',
      params: {
        access_token: pageAccessToken,
      },
      url: `https://graph.facebook.com/v2.6/${options.userID}`,
    });
    if (res.status !== 200) {
      throw new Error(`Failed calling Send API ${res.status} ${res.statusText} ${res.data.error}`);
    }
    return {
      firstName: res.data.first_name,
      gender: res.data.gender,
      // isPaymentEnabled: res.data.is_payment_enabled,
      lastName: res.data.last_name,
      locale: res.data.locale,
      profilePic: res.data.profile_pic,
      timezone: res.data.timezone,
    };
  }

  // Call the Send API. The message data goes in the body. If successful, we'll
  // get the message ID in a response
  protected async _send(payload: SendPayload) {
    const { pageAccessToken } = _options.get(this);
    const req = {
      data: payload,
      method: 'post',
      params: {
        access_token: pageAccessToken,
      },
      url: 'https://graph.facebook.com/v2.6/me/messages',
    };
    if (process.env.DEBUG) {
      console.log(JSON.stringify(req, null, 2));
    }
    const res = await axios(req);

    if (res.status !== 200) {
      throw new Error(`Failed calling Send API ${res.status} ${res.statusText} ${res.data.error}`);
    }

    const recipientID = res.data.recipient_id;
    const messageID = res.data.message_id;

    if (process.env.DEBUG) {
      if (messageID) {
        console.log(`Successfully sent message with id ${messageID} to recipient ${recipientID}`);
      } else {
        console.log(`Successfully called Send API for recipient ${recipientID}`);
      }
    }
  }
}
