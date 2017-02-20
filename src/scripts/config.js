import { Expo } from 'gsap';

/**
 * Default configuration
 * @type {Object}
 */
export const config = {
  contentSpacing: 16,
  easing: Expo.easeInOut,
  classes: {
    required: 'is-required',
    valid: 'is-valid',
    notValid: 'is-notValid',
    open: 'is-open',
    active: 'is-active',
    hidden: 'is-hidden',
    uHidden: 'u-hidden',
  },
};
