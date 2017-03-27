import { TimelineMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $html = document.documentElement;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteNavigation = document.querySelector('.site-navigation');
const siteNavigationWidth = $siteNavigation.offsetWidth;
const navOpenClass = 'navigation-is-open';
const $siteWrapper = document.querySelector('.site-wrapper');

let serverLoad = false;

//
// Navigation timelines
//

const navLockedTimeline = new TimelineMax({
  paused: true,
  onComplete() {
    // Add loaded class
    if (serverLoad) {
      $html.classList.add('is-loaded');
    }
  },
});

navLockedTimeline
.to($siteNavigation, 0.25, {
  x: '0%',
}, 'locked')
.to($siteWrapper, 0.25, {
  x: '0%',
  marginLeft: `${siteNavigationWidth}px`,
}, 'locked');

let forward = true;
let lastTime = 0;
const navOpenTimeline = new TimelineMax({
  paused: true,
  onStart() {
    $html.classList.add(navOpenClass);
  },
  onUpdate() {
    const newTime = navLockedTimeline.time();
    if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
      forward = !forward;
      if (!forward) {
        $html.classList.remove(navOpenClass);
      }
    }
    lastTime = newTime;
  },
});

navOpenTimeline
.to($siteOverlay, 0.25, {
  display: 'block',
  opacity: 0.2,
})
.to($siteNavigation, 0.25, {
  x: '0%',
}, 'open')
.to($siteWrapper, 0.25, {
  x: siteNavigationWidth,
}, 'open');

/**
 * Determines state of scaffolding based on window size
 * @return void
 */
function toggleNav(load = false) {
  serverLoad = load;

  // nav toggling below 1200px
  if (window.matchMedia('(max-width: 1199px)').matches) {
    navLockedTimeline.progress(0);
  }

  // lock nav in open position at 1200px
  if (window.matchMedia('(min-width: 1200px)').matches) {
    navOpenTimeline.progress(0);
    navLockedTimeline.progress(1);
  }
}

// Navigation listener
UtilitySystem.optimizedResize.add(toggleNav);
// Also run onload
toggleNav(true);

document.querySelector('.site-header__menu').addEventListener('click', () => {
  $siteNavigation.scrollTop = 0;
  navOpenTimeline.play();
});

$siteOverlay.addEventListener('click', () => {
  navOpenTimeline.reverse();
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

// On click of internal links, fade content
const $links = document.querySelectorAll('[href^="/"], [href^="."]');
UtilitySystem.forEach($links, (index, value) => {
  value.addEventListener('click', () => {
    $html.classList.remove('is-loaded');
  });
});
