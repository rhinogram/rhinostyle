import { TimelineMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $html = document.documentElement;
const $siteOverlay = document.querySelector('#site-overlay');

// Navigation listener
UtilitySystem.optimizedResize.add(() => {
  // nav toggling below 1200px
  if (window.matchMedia('(max-width: 1199px)').matches) {
    $html.classList.remove('navigation-is-locked');
  }

  // lock nav in open position at 1200px
  if (window.matchMedia('(min-width: 1200px)').matches) {
    $html.classList.remove('navigation-is-open');
    $html.classList.add('navigation-is-locked');
  }

  // panel toggling below 1500px
  if (window.matchMedia('(max-width: 1499px)').matches) {
    $siteOverlay.addEventListener('click', () => {
      $html.classList.remove('panel-is-open');
    });
  }
});

document.querySelector('.site-header__menu').addEventListener('click', () => {
  document.querySelector('#site-navigation').scrollTop = 0;
  $html.classList.add('navigation-is-open');
});

$siteOverlay.addEventListener('click', () => {
  $html.classList.remove('navigation-is-open');
});

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


// SVG loader
UtilitySystem.svgLoad(`${rhinoDocs.rootPath}svg/sprite.svg`); // eslint-disable-line

const hostName = document.location.hostname;
// Handle active navigation
const split = (hostName === 'localhost') ? 1 : 2;
const navLocation = location.pathname.split('/')[split];

if (navLocation) {
  document.querySelector(`.site-navigation__nav a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  document.querySelector('.site-navigation__nav a[href=""').classList.add('active');
}
