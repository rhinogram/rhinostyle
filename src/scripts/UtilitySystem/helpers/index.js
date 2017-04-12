import { Expo } from 'gsap';

/**
 * Default configuration
 * @type {Object}
 */
export const config = {
  contentSpacing: 16,
  easing: Expo.easeInOut,
  breakpoints: {
    xs: '480px',
    xsMax: '479px',
    sm: '768px',
    smMax: '767px',
    md: '992px',
    mdMax: '991px',
    lg: '1200px',
    lgMax: '1199px',
  },
  classes: {
    open: 'is-open',
    active: 'is-active',
    hidden: 'is-hidden',
    uHidden: 'u-hidden',
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
  for (let i = 0, length = array.length; i < length; i += 1) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
}

/**
 * Resize listener
 * @return {function}
 */
export const optimizedResize = (function() { // eslint-disable-line
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
    callbacks.forEach(function(callback) { // eslint-disable-line
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
