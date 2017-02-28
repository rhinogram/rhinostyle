import { TimelineMax, SteppedEase } from 'gsap';
import load from '../svg';
import { optimizedResize } from '../utility';

const $html = document.documentElement;
const $siteOverlay = document.querySelector('#site-overlay');

optimizedResize.add(() => {
  // nav toggling below 1200px
  if (window.matchMedia('(max-width: 1199px)').matches) {
    $html.classList.remove('navigation-is-locked');

    document.querySelector('#site-header__menu').addEventListener('click', () => {
      document.querySelector('#site-navigation').scrollTop = 0;
      $html.classList.add('navigation-is-open');
    });

    $siteOverlay.addEventListener('click', () => {
      $html.classList.remove('navigation-is-open');
    });
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

// SVG loader
load(`${rhinoDocs.rootPath}svg/sprite.svg`); // eslint-disable-line

//
// Animations
//

const rhinoFlag = {
  frames: 51, // 52 total frames minus 1
  ease: new SteppedEase(function() { console.log(this.frames); return this.frames; }), // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoLogin = {
  frames: 64, // 65 total frames minus 1
  ease: new SteppedEase(function() { return this.frames; }), // eslint-disable-line
  position: '-98.46%', // total height of svg (29900) minus height of 1 frame (460px) / 29900 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoSecure = {
  frames: 51, // 52 total frames minus 1
  ease: new SteppedEase(function() { return this.frames; }), // eslint-disable-line
  position: '-98.07%', // total height of svg (45760) minus height of 1 frame (880px) / 45760 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};
const rhinoTime = {
  frames: 58, // 59 total frames minus 1
  ease: new SteppedEase(function() { return this.frames; }), // eslint-disable-line
  position: '-98.3%', // total height of svg (51920) minus height of 1 frame (880px) / 51920 * 100
  speed: 3,
  timeline: new TimelineMax({ repeat: -1, repeatDelay: 2 }),
};

rhinoFlag.timeline.to('.rhino-animation__flag', rhinoFlag.speed, {
  y: rhinoFlag.position,
  ease: rhinoFlag.ease,
});

rhinoLogin.timeline.to('.rhino-animation__login', rhinoLogin.speed, {
  y: rhinoLogin.position,
  ease: rhinoLogin.ease,
});

rhinoSecure.timeline.to('.rhino-animation__secure', rhinoSecure.speed, {
  y: rhinoSecure.position,
  ease: rhinoSecure.ease,
});

rhinoTime.timeline.to('.rhino-animation__time', rhinoTime.speed, {
  y: rhinoTime.position,
  ease: rhinoTime.ease,
});

const hostName = document.location.hostname;
// Handle active navigation
const split = (hostName === 'localhost') ? 1 : 2;
const navLocation = location.pathname.split('/')[split];

if (navLocation) {
  document.querySelector(`.site-navigation__nav a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  document.querySelector('.site-navigation__nav a[href=""').classList.add('active');
}
