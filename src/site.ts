export const STRIPE_TRIAL_LINK = '';

export const CALENDLY = 'https://calendly.com/aweb3dad/15-minute-greeting';

export const callLink = {
  href: CALENDLY,
  onclick: `Calendly.initPopupWidget({url:'${CALENDLY}'});return false;`,
};

export const trialLink = STRIPE_TRIAL_LINK ? { href: STRIPE_TRIAL_LINK } : callLink;
