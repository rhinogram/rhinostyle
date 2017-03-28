import { TweenMax, TimelineMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $html = document.documentElement;
const $body = document.body;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteNavigation = document.querySelector('#site-navigation');
const siteNavigationWidth = $siteNavigation.offsetWidth;
const $siteHeaderMenu = document.querySelector('.site-header__menu');
const $siteWrapper = document.querySelector('.site-wrapper');

const navOpenClass = 'navigation-is-open';
const navEase = 0.25;

// Navigation listener
UtilitySystem.optimizedResize.add(() => {
  handleUI();
});

$siteHeaderMenu.addEventListener('click', () => {
  openNavigation();
});

$siteOverlay.addEventListener('click', () => {
  closeNavigation();
});

/**
 * Determine if window matches smaller size
 * @param  {Boolean} [load=false] Is this a server-side load?
 * @return {void}
 */
function matchMobile(load = false) {
  if (window.matchMedia(`(max-width: ${UtilitySystem.config.breakpoints.smMax})`).matches) {
    unlockNavigation(load);
  }
}

/**
 * Determine if window matches desktop size
 * @param  {Boolean} [load=false] Is this a server-side load?
 * @return {void}
 */
function matchDesktop(load = false) {
  if (window.matchMedia(`(min-width: ${UtilitySystem.config.breakpoints.sm})`).matches) {
    lockNavigation(load);
  }
}

/**
 * Open navigation
 * Runs on mobile-view
 * @return {[type]} [description]
 */
function openNavigation() {
  $html.classList.add(navOpenClass);
  $siteNavigation.scrollTop = 0;
  TweenMax.to($siteNavigation, navEase, { x: 0, ease: UtilitySystem.config.easing });
  TweenMax.to($siteWrapper, navEase, { x: siteNavigationWidth, ease: UtilitySystem.config.easing });
}

/**
 * Close navigation
 * Runs on mobile-view
 * @return {void}
 */
function closeNavigation() {
  $html.classList.remove(navOpenClass);
  TweenMax.to($siteNavigation, navEase, { x: (-siteNavigationWidth), ease: UtilitySystem.config.easing });
  TweenMax.to($siteWrapper, navEase, { x: 0, ease: UtilitySystem.config.easing });
}

/**
 * Lock navigation
 * Desktop-view
 * @param  {Boolean} [load=false] Is this a server-side load?
 * @return {void}
 */
function lockNavigation(load = false) {
  $html.classList.remove(navOpenClass);
  TweenMax.to($siteNavigation, navEase, { x: 0, ease: UtilitySystem.config.easing });
  TweenMax.to($siteWrapper, navEase, {
    x: 0,
    marginLeft: 240,
    ease: UtilitySystem.config.easing,
    onComplete() {
      if (load) {
        showContent();
      }
    },
  });
}

/**
 * Unlock navigation
 * Mobile-view
 * @param  {Boolean} [load=false] Is this a server-side load?
 * @return {void}
 */
function unlockNavigation(load = false) {
  $html.classList.remove(navOpenClass);
  TweenMax.to($siteNavigation, navEase, { x: (-siteNavigationWidth), ease: UtilitySystem.config.easing });
  TweenMax.to($siteWrapper, navEase, {
    x: 0,
    marginLeft: 0,
    ease: UtilitySystem.config.easing,
    onComplete() {
      if (load) {
        showContent();
      }
    },
  });
}

/**
 * Fire off GSAP-powered panel scaffolding
 * @param  {Boolean} [load=false] Is this a server-side load?
 * @return {void}
 */
function handleUI(load = false) {
  matchMobile(load);
  matchDesktop(load);
}

/**
 * Once GSAP has figured out the project scaffolding
 * Show body content
 * @return {void}
 */
function showContent() {
  $body.style.opacity = 1;
}

// Fire onload
handleUI(true);

//
// Animations
//

const rhinoLogin = {
  frames: 64, // 65 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.46%', // total height of svg (29900) minus height of 1 frame (460px) / 29900 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoFlag = {
  frames: 51, // 52 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoSecure = {
  frames: 51, // 52 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoTime = {
  frames: 58, // 59 total frames minus 1
  ease: function() { return new SteppedEase(this.frames) }, // eslint-disable-line
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
const navLocation = location.pathname.split('/')[split];

if (navLocation) {
  // Add active class to current nav item
  $siteNavigation.querySelector(`a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  // Remove active class from any other nav item(s)
  UtilitySystem.forEach($siteNavigation.querySelectorAll('a'), (index, value) => {
    value.classList.remove('active');
  });
}
