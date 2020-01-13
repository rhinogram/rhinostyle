/*!
 * ResizeListener
 * Detect when HTML elements change in size
 * https://github.com/ShimShamSam/ResizeListener
 *
 * Copyright 2016 Samuel Hodge
 * Released under the GPL license
 * http://www.gnu.org/copyleft/gpl.html
 */
(function scope(root) {
  const name = 'ResizeListener';
  const _private = typeof Symbol === 'function' ? Symbol(name) : `__${name}__`;
  const tagName = `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-element`;
  const massive = 999999;
  let dirtyFrame = null;
  const dirty = [];

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function requestAnimationFrame(callback) {
      return window.setTimeout(callback, 16);
    };

  // Sensor template setup
  const sensorTemplate = document.createElement(tagName);
  const sizerTemplate = sensorTemplate.cloneNode(true);
  const sharedCss = `position:absolute;top:0;left:0;z-index:-${massive};visibility:hidden;overflow:hidden;`;

  sensorTemplate.style.cssText = `${sharedCss}width:100%;height:100%`;
  sizerTemplate.style.cssText = `${sharedCss}width:${massive}px;height:${massive}px`;

  const expandSensor = sensorTemplate.cloneNode(true);
  const shrinkSensor = sensorTemplate.cloneNode(true);
  const expandSizer = sizerTemplate.cloneNode(true);
  const shrinkSizer = sizerTemplate.cloneNode(true);

  shrinkSizer.style.width = '200%';
  shrinkSizer.style.height = '200%';

  sensorTemplate.appendChild(expandSensor);
  sensorTemplate.appendChild(shrinkSensor);
  expandSensor.appendChild(expandSizer);
  shrinkSensor.appendChild(shrinkSizer);

  // API export
  const api = {
    add: function add(elements, callbacks) {
      elements = wrapInArray(elements); // eslint-disable-line no-param-reassign
      callbacks = wrapInArray(callbacks); // eslint-disable-line no-param-reassign

      for (let i = 0; i < elements.length; ++i) {
        for (let j = 0; j < callbacks.length; ++j) {
          addResizeListener(elements[i], callbacks[j]);
        }
      }
    },

    remove: function remove(elements, callbacks) {
      elements = wrapInArray(elements); // eslint-disable-line no-param-reassign
      callbacks = wrapInArray(callbacks); // eslint-disable-line no-param-reassign

      for (let i = 0; i < elements.length; ++i) {
        for (let j = 0; j < callbacks.length; ++j) {
          removeResizeListener(elements[i], callbacks[j]);
        }
      }
    },
  };

  if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
    define(api); // eslint-disable-line no-undef
  } else if (typeof exports === 'object') {
    module.exports = api;
  } else {
    root[name] = api; // eslint-disable-line no-param-reassign
  }

  /**
  * Attaches a resize callback to an element
  * @param {HTMLElement} element
  * @param {Function}    callback
  */
  function addResizeListener(element, callback) {
    const listener = getListener(element);

    if (listener) {
      listener.callbacks.push(callback);

      return;
    }

    const sensor = sensorTemplate.cloneNode(true);
    const expandSensor = sensor.childNodes[0]; // eslint-disable-line no-shadow
    const shrinkSensor = sensor.childNodes[1]; // eslint-disable-line no-shadow

    // Convert the element to relative positioning if it's currently static
    const position =
      // eslint-disable-next-line no-nested-ternary
      element.currentStyle ? element.currentStyle.position :
        window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue('position') :
          element.style.position;

    if (position === 'static') {
      element.style.position = 'relative'; // eslint-disable-line no-param-reassign
    }

    element.appendChild(sensor);

    sensor[_private] =
    expandSensor[_private] = // eslint-disable-line no-multi-assign
    shrinkSensor[_private] = { // eslint-disable-line no-multi-assign
      sensor,
      expandSensor,
      shrinkSensor,
      last_width: element.offsetWidth,
      last_height: element.offsetHeight,
      callbacks: [callback],
      dirty: false,
    };

    expandSensor.scrollLeft =
    expandSensor.scrollTop = // eslint-disable-line no-multi-assign
    shrinkSensor.scrollLeft = // eslint-disable-line no-multi-assign
    shrinkSensor.scrollTop = massive; // eslint-disable-line no-multi-assign

    expandSensor.onscroll =
    shrinkSensor.onscroll = scrollHandler; // eslint-disable-line no-multi-assign
  }

  /**
  * Removes a resize callback from an element
  * If no callback is defined, all callbacks are removed
  * @param {HTMLElement} element
  * @param {Function}    callback
  */
  function removeResizeListener(element, callback) {
    const listener = getListener(element);

    if (!listener) {
      return;
    }

    // If a specific callback was passed in, remove it
    if (callback) {
      const { callbacks } = listener;

      for (let i = 0; i < callbacks.length; ++i) {
        if (callbacks[i] === callback) {
          callbacks.splice(i, 1);
          // eslint-disable-next-line no-plusplus
          --i;
        }
      }

      // If there are still callbacks, we're done
      if (callbacks.length) {
        return;
      }
    }

    // If we've made it this far, remove the entire listener
    element.removeChild(listener.sensor);
  }

  /**
  * Scroll event handler
  * @param {Event} e
  */
  function scrollHandler(e) {
    if (!e) {
      e = window.event; // eslint-disable-line no-param-reassign
    }

    const target = e.target || e.srcElement;

    if (!target) {
      return;
    }

    const listener = target[_private];

    if (listener.dirty) {
      return;
    }

    listener.dirty = true;
    dirty.push(listener);

    // Queue up a frame to check dirty listeners
    if (!dirtyFrame) {
      dirtyFrame = requestAnimationFrame(checkDirtyListeners); // eslint-disable-line no-multi-assign
    }
  }

  /**
  * Checks all possibly resized listeners for changes in dimensions
  */
  function checkDirtyListeners() {
    for (let i = 0; i < dirty.length; ++i) {
      const listener = dirty[i];
      const element = listener.sensor.parentNode;

      listener.dirty = false;

      listener.expandSensor.scrollLeft =
      listener.expandSensor.scrollTop = // eslint-disable-line no-multi-assign
      listener.shrinkSensor.scrollLeft = // eslint-disable-line no-multi-assign
      listener.shrinkSensor.scrollTop = massive; // eslint-disable-line no-multi-assign

      if (!element) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const width = element.offsetWidth;
      const height = element.offsetHeight;

      if (listener.last_width === width && listener.last_height === height) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const data = {
        width,
        height,
        last_width: listener.last_width,
        last_height: listener.last_height,
      };

      listener.last_width = width;
      listener.last_height = height;

      for (let j = 0; j < listener.callbacks.length; ++j) {
        listener.callbacks[j].call(listener.sensor.parentNode, data);
      }
    }

    dirty.length = 0;
    dirtyFrame = null;
  }

  /**
  * Gets the listener object for a given element
  * @param  {HTMLElement} element The element to get the listener for
  * @return {Object|null}         The listener or null if one was not found
  */
  function getListener(element) {
    if (element[_private]) {
      return element[_private];
    }

    for (let i = 0; i < element.childNodes.length; ++i) {
      const child = element.childNodes[i];

      if (child[_private]) {
        return child[_private];
      }
    }

    return null;
  }

  /**
  * Wraps a value in an array if it isn't one
  * @param  {*} value The value to wrap
  * @return {*}       The wrapped value
  */
  function wrapInArray(value) {
    if (!value || typeof value !== 'object' || typeof value.length === 'undefined') {
      return [value];
    }

    return value;
  }
}(this));
