import { TimelineMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $html = document.documentElement;
const $body = document.body;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteNavigation = document.querySelector('#site-navigation');
const siteNavigationWidth = $siteNavigation.offsetWidth;
const $siteHeaderMenu = document.querySelector('.site-header__menu');
const $siteWrapper = document.querySelector('.site-wrapper');

const navEase = 0.25;
let mobileNavOpen = false;

// Timelines
const lockNavTimeline = new TimelineMax({
  paused: true,
  onComplete() {
    $html.setAttribute('data-nav-loaded', true);
  },
})
.to($siteNavigation, navEase, {
  x: 0,
  ease: UtilitySystem.config.easing,
}, 'lock')
.to($siteWrapper, navEase, {
  x: 0,
  marginLeft: 240,
  ease: UtilitySystem.config.easing,
}, 'lock');

const unlockNavTimeline = new TimelineMax({
  paused: true,
  onComplete() {
    $html.setAttribute('data-nav-loaded', true);
  },
})
.to($siteNavigation, navEase, {
  x: (-siteNavigationWidth),
  ease: UtilitySystem.config.easing,
}, 'unlock')
.to($siteWrapper, navEase, {
  x: 0,
  marginLeft: 0,
  ease: UtilitySystem.config.easing,
}, 'unlock');

const toggleMobileNavTimeline = new TimelineMax({
  paused: true,
  onComplete() {
    $html.setAttribute('data-mobile-nav', true);
  },
  onReverseComplete() {
    $html.removeAttribute('data-mobile-nav');

    if (mobileNavOpen) {
      mobileNavOpen = false;

      lockNavigation();
    }
  },
})
.set($body, {
  height: '100%',
  overflow: 'hidden',
})
.to($siteOverlay, navEase, {
  display: 'block',
  opacity: 0.2,
}, 'mobileNav')
.to($siteNavigation, navEase, {
  x: 0,
  ease: UtilitySystem.config.easing,
}, 'mobileNav')
.to($siteWrapper, navEase, {
  x: siteNavigationWidth,
  ease: UtilitySystem.config.easing,
}, 'mobileNav');

/**
 * Determine if window matches smaller size
 * @return {void}
 */
function matchMobile() {
  if (window.matchMedia(`(max-width: ${UtilitySystem.config.breakpoints.smMax})`).matches) {
    unlockNavigation();
  }
}

/**
 * Determine if window matches desktop size
 * @return {void}
 */
function matchDesktop() {
  if (window.matchMedia(`(min-width: ${UtilitySystem.config.breakpoints.sm})`).matches) {
    // If mobile nav is open while resizing to "desktop-size"
    if ($html.hasAttribute('data-mobile-nav')) {
      mobileNavOpen = true;
      toggleMobileNavTimeline.reverse();
    } else {
      lockNavigation();
    }
  }
}

/**
 * Open navigation
 * Runs on mobile-view
 * @return {[type]} [description]
 */
function openNavigation() {
  $siteNavigation.scrollTop = 0;

  toggleMobileNavTimeline.play();
}

/**
 * Close navigation
 * Runs on mobile-view
 * @return {void}
 */
function closeNavigation() {
  toggleMobileNavTimeline.reverse();
}

/**
 * Lock navigation
 * Desktop-view
 * @return {void}
 */
function lockNavigation() {
  unlockNavTimeline.progress(0);
  lockNavTimeline.progress(1);
}

/**
 * Unlock navigation
 * Mobile-view
 * @return {void}
 */
function unlockNavigation() {
  lockNavTimeline.progress(0);
  unlockNavTimeline.progress(1);
}

/**
 * Fire off GSAP-powered panel scaffolding
 * @return {void}
 */
function handleUI() {
  matchMobile();
  matchDesktop();
}

// Fire onload
handleUI();

// Fire on resize
UtilitySystem.optimizedResize.add(() => {
  handleUI();
});

$siteHeaderMenu.addEventListener('click', () => {
  openNavigation();
});

$siteOverlay.addEventListener('click', () => {
  closeNavigation();
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
  $siteNavigation.querySelector(`a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add('active'); // eslint-disable-line
} else {
  // Remove active class from any other nav item(s)
  UtilitySystem.forEach($siteNavigation.querySelectorAll('a'), (index, value) => {
    value.classList.remove('active');
  });
}
