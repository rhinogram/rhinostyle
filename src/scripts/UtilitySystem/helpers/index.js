import { Back, Expo } from 'gsap';

/**
 * Default configuration
 * @type {Object}
 */
export const config = {
  contentSpacing: 16,
  easing: Expo.easeInOut,
  easingBounce: Back.easeOut.config(1),
  breakpoints: {
    xsmall: '480px',
    xsmallMax: '479px',
    small: '768px',
    smallMax: '767px',
    medium: '992px',
    mediumMax: '991px',
    large: '1200px',
    largeMax: '1199px',
  },
  classes: {
    open: 'is-open',
    active: 'is-active',
    disabled: 'is-disabled',
    hidden: 'is-hidden',
    uHidden: 'u-hidden',
    loading: 'is-loading',
  },
  resourceSizes: {
    small: 250,
    large: 400,
  },
};

/**
 * Loop over DOM nodes
 * @param  {array}   array
 * @param  {function} callback
 * @param  {scope}   scope
 * @return {void}
 */
export function forEach(array, callback, scope) {
  const { length } = array;

  for (let i = 0; i < length; i += 1) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
}

/**
 * Resize listener
 * @return {function}
 */
export const optimizedResize = (function() { // eslint-disable-line func-names
  const callbacks = [];
  let running = false;

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach((callback) => {
      callback();
    });

    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }
      addCallback(callback);
    },
  };

}()); // eslint-disable-line

/**
 * Compare two arrays
 * @param  {arr1}   array
 * @param  {arr2}   array
 * @param  {strict} boolean
 * @return {boolean}
 */
export function compareFlatArray(arr1, arr2, strict = false) {
  if (!arr1 || !arr2) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  if (strict) {
    return compare(arr1, arr2);
  }

  return compare(arr1.sort(), arr2.sort());

  function compare(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }
}

/**
 *  Check if browsers supports `vector-effect: non-scaling-stroke`
 *  Add class to body if not
 *
 * @return {void}
 */
export function checkVectorEffectSupport() {
  const temp = document.createElement('div');
  const supported = temp.style['vector-effect'] !== undefined;

  if (!supported) {
    document.body.classList.add('no-vectorEffect-support');
  }
}


/**
 * Taken from https://www.npmjs.com/package/uuid
 *
 * @param  {string} a
 * @return {string}
 */
export function generateUUID(a) {
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID); // eslint-disable-line
}
