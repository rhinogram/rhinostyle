import 'what-input';
import { TimelineMax, TweenMax, SteppedEase, Power0 } from 'gsap';
import Draggable from 'gsap/Draggable';

import '../vendor/ThrowPropsPlugin.js';
import { UtilitySystem } from '../UtilitySystem';

const $body = document.body;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteWrapper = document.querySelector('.site-wrapper');
const $siteNavigation = document.querySelector('#site-navigation');
const siteNavigationWidth = $siteNavigation.offsetWidth;
const $proxy = document.createElement('div');
const $siteHeaderMenu = document.querySelector('.site-header__menu');

const navEase = 0.25;
const navSelectors = [$body, $siteOverlay, $siteNavigation];
let mobileNavTimeline;

// Check for `vector-effect: non-scaling-stroke` support
UtilitySystem.checkVectorEffectSupport();

// Timelines
const mobileNavTimelineFunc = () => new TimelineMax({
  paused: true,
  onStart: () => {
    addNavBodyClass();
    setupDraggable();
  },
  onReverseComplete() {
    removeNavBodyClass();
    killDraggable();
    TweenMax.set(navSelectors, { clearProps: 'all' });
  },
})
  .set($siteOverlay, {
    display: 'block',
  })
  .to($siteOverlay, navEase, {
    opacity: 1,
  }, 'mobileNav')
  .to($siteNavigation, navEase, {
    x: 0,
    ease: Power0.easeNone,
  }, 'mobileNav');

/**
 * Add class attached to body when nav visibility is changed
 * @return {void}
 */
function addNavBodyClass() {
  $body.classList.add('has-open-nav');

  // Focus on navigation
  $siteNavigation.focus();
}

/**
 * Remove class attached to body when nav visibility is changed
 * @return {void}
 */
function removeNavBodyClass() {
  $body.classList.remove('has-open-nav');

  // Focus on navigation
  $siteWrapper.focus();
}

/**
 * Build timelines attached to nav
 * @return {void}
 */
function buildNavTimeline() {
  mobileNavTimeline = mobileNavTimelineFunc();
}

/**
 * Build Draggable instance
 * @return {void}
 */
function setupDraggable() {
  Draggable.create($proxy, {
    type: 'x',
    trigger: $body, // So we can start the drag from outside of the nav itself
    throwProps: true,
    dragClickables: true,
    overshootTolerance: 0,
    maxDuration: 1, // Speed up snap/throwProps if need-be
    bounds: $siteNavigation,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    onPress: updateProxy,
    onRelease: checkThrowing,
    snap: {
      x: snapX,
    },
  });
}

/**
 * Removes Draggable instance
 * @return {void}
 */
function killDraggable() {
  // If Draggable has been initiated
  if (Draggable.get($proxy)) {
    Draggable.get($proxy).kill();
  }
}

/**
 * Determine if menu is being "thrown" or "flicked"
 * @return {void}
 */
function checkThrowing() {
  if (!this.isThrowing) {
    mobileNavTimeline.resume();
  }
}

/**
 * Determine current offset of proxy in relation to site navigation
 * @return {void}
 */
function updateProxy() {
  mobileNavTimeline.pause();

  TweenMax.set(this.target, {
    x: siteNavigationWidth * mobileNavTimeline.progress(),
  });

  this.update();
}

/**
 * Update timeline with current position of draggable element
 * @return {void}
 */
function updateProgress() {
  const progress = clamp(this.x / siteNavigationWidth, 0, 1);

  mobileNavTimeline.progress(progress);
}

/**
 * Ensure "flick" closes navigation
 * @param  {integer} x
 * @return {integer}
 */
function snapX(x) {
  if (x <= (siteNavigationWidth / 2)) {
    return 0;
  }

  return siteNavigationWidth;
}

/**
 * Force value into a range
 * @param  {integer} value
 * @param  {integer} min
 * @param  {integer} max
 * @return {integer}
 */
function clamp(value, min, max) {
  return value < min ? min : (value > max ? max : value); // eslint-disable-line no-nested-ternary
}

/**
 * Update nav UI based on "mobile-to-desktop" UI update
 * @return {void}
 */
function navMobileToDesktop() {
  // Reset navigation timeline based on screen-width
  // If the mobile nav was open previously
  if (mobileNavTimeline.progress() === 1) {
    // Reset mobile timeline
    mobileNavTimeline.seek(0).kill();

    // Make sure we clear props for all nav selectors to avoid conflicts
    TweenMax.set(navSelectors, { clearProps: 'all' });

    removeNavBodyClass();
    killDraggable();

    // Reset for use later
    buildNavTimeline();
  }
}

/**
 * Builds scaffolding based on current window width
 * Runs onload and onresize
 * @return {void}
 */
function buildNavUI() {
  // From mobile to desktop
  if (!window.matchMedia(`(max-width: ${UtilitySystem.config.breakpoints.largeMax})`).matches) {
    navMobileToDesktop();
  }
}

/**
 * Kick off navigation
 * @return {void}
 */
function navInit() {
  buildNavTimeline();

  // We can just run this without any init checks since it's only done once
  UtilitySystem.optimizedResize.add(() => {
    buildNavUI();
  });
}

navInit();

/**
 * Toggle navigation based on screen-width
 * @return {void}
 */
function toggleNav() {
  $siteNavigation.scrollTop = 0;

  if (mobileNavTimeline.progress() === 0) {
    mobileNavTimeline.play();
  } else {
    mobileNavTimeline.reverse();
  }
}

$siteHeaderMenu.addEventListener('click', toggleNav);
$siteOverlay.addEventListener('click', toggleNav);

//
// Animations
//

const rhinoLogin = {
  frames: 64, // 65 total frames minus 1
  ease() { return new SteppedEase(this.frames); },
  position: '-98.46%', // total height of svg (29900) minus height of 1 frame (460px) / 29900 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoFlag = {
  frames: 51, // 52 total frames minus 1
  ease() { return new SteppedEase(this.frames); },
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoSecure = {
  frames: 51, // 52 total frames minus 1
  ease() { return new SteppedEase(this.frames); },
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoTime = {
  frames: 58, // 59 total frames minus 1
  ease() { return new SteppedEase(this.frames); },
  position: '-98.3%', // total height of svg (51920) minus height of 1 frame (880px) / 51920 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};

rhinoLogin.timeline.to('.rhino-animation__login', rhinoLogin.speed, {
  y: rhinoLogin.position,
  ease: rhinoLogin.ease(),
});

rhinoFlag.timeline.to('.rhino-animation__flag', rhinoFlag.speed, {
  y: rhinoFlag.position,
  ease: rhinoFlag.ease(),
});

rhinoSecure.timeline.to('.rhino-animation__secure', rhinoSecure.speed, {
  y: rhinoSecure.position,
  ease: rhinoSecure.ease(),
});

rhinoTime.timeline.to('.rhino-animation__time', rhinoTime.speed, {
  y: rhinoTime.position,
  ease: rhinoTime.ease(),
});

const hostName = document.location.hostname;
// Handle active navigation
const split = (hostName === 'localhost') ? 1 : 2;
const navLocation = window.location.pathname.split('/')[split];

if (navLocation) {
  // Add active class to current nav item
  $siteNavigation.querySelector(`a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add(UtilitySystem.config.classes.active); // eslint-disable-line
} else {
  // Remove active class from any other nav item(s)
  UtilitySystem.forEach($siteNavigation.querySelectorAll('a'), (index, value) => {
    value.classList.remove(UtilitySystem.config.classes.active);
  });
}
