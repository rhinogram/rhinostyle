import { TweenMax, TimelineMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $html = document.documentElement;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteNavigation = document.querySelector('#site-navigation');
const $siteHeaderMenu = document.querySelector('.site-header__menu');
const $siteWrapper = document.querySelector('.site-wrapper');

// Navigation listener
UtilitySystem.optimizedResize.add(() => {
  matchMobile();
  matchDesktop();
});

$siteHeaderMenu.addEventListener('click', () => {
  openNavigation();
});

$siteOverlay.addEventListener('click', () => {
  closeNavigation();
});


// nav toggling below 1200px
function matchMobile() {
  if (window.matchMedia('(max-width: 1199px)').matches) {
    unlockNavigation();
  }
}

// lock nav in open position at 1200px
function matchDesktop() {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    lockNavigation();
  }
}

function openNavigation() {
  $html.classList.add('navigation-is-open');
  $siteNavigation.scrollTop = 0;
  TweenMax.to($siteNavigation, 0.35, { x: 0 });
  TweenMax.to($siteWrapper, 0.35, { x: 240, onComplete: logIt });
}

function closeNavigation() {
  $html.classList.remove('navigation-is-open');
  TweenMax.to($siteNavigation, 0.35, { x: -240 });
  TweenMax.to($siteWrapper, 0.35, { x: 0 });
}

function lockNavigation() {
  $html.classList.remove('navigation-is-open');
  $html.classList.add('navigation-is-locked');
  TweenMax.to($siteNavigation, 0.35, { x: 0 });
  TweenMax.to($siteWrapper, 0.35, { x: 0, marginLeft: 240 });
}

function unlockNavigation() {
  $html.classList.remove('navigation-is-open');
  $html.classList.remove('navigation-is-locked');
  TweenMax.to($siteNavigation, 0.35, { x: -240 });
  TweenMax.to($siteWrapper, 0.35, { x: 0, marginLeft: 0 });
}

matchMobile();
matchDesktop();

function logIt() {
  console.log("pie");
}


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
  document.querySelector(`.site-navigation__nav a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  // Remove active class from any other nav item(s)
  UtilitySystem.forEach(document.querySelector('.site-navigation__nav a'), (index, value) => {
    value.classList.remove('active');
  });
}
