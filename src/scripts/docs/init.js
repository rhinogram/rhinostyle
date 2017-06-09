import 'what-input';
import { TimelineMax, TweenMax, SteppedEase } from 'gsap';
import { UtilitySystem } from '../UtilitySystem';

const $body = document.body;
const $siteOverlay = document.querySelector('#site-overlay');
const $siteNavigation = document.querySelector('#site-navigation');
const $siteHeaderMenu = document.querySelector('.site-header__menu');

const navEase = 0.25;
const navSelectors = [$siteOverlay, $siteNavigation];
let mobileNavTimeline;

// Timelines
const mobileNavTimelineFunc = () => new TimelineMax({
  paused: true,
  onReverseComplete() {
    TweenMax.set(navSelectors, { clearProps: 'all' });
  },
})
.set($body, {
  height: '100%',
  overflow: 'hidden',
})
.set($siteOverlay, {
  display: 'block',
})
.to($siteOverlay, navEase, {
  opacity: 1,
}, 'mobileNav')
.to($siteNavigation, navEase, {
  x: 0,
  ease: UtilitySystem.config.easing,
}, 'mobileNav');

/**
 * Build timelines attached to nav
 * @return {void}
 */
function buildNavTimeline() {
  mobileNavTimeline = mobileNavTimelineFunc();
}


/**
 * Update nav UI based on "desktop-to-mobile" UI update
 * @return {void}
 */
function navDesktopToMobileCheck() {
  // Reset navigation timeline based on screen-width
  // If the mobile nav was open previously
  if (mobileNavTimeline.progress() === 1) {
    // Reset mobile timeline
    mobileNavTimeline.seek(0).kill();

    // Make sure we clear props for all nav selectors to avoid conflicts
    TweenMax.set(navSelectors, { clearProps: 'all' });

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
  //
  // From desktop to mobile
  //

  if (!window.matchMedia(`(max-width: ${UtilitySystem.config.breakpoints.largeMax})`).matches) {
    //
    // From mobile to desktop
    //

    navDesktopToMobileCheck();
  }
}

/**
 * Kick off navigation
 * @return {void}}
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
 * @return {[type]} [description]
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
const navLocation = location.pathname.split('/')[split];

if (navLocation) {
  // Add active class to current nav item
  $siteNavigation.querySelector(`a[href^="${rhinoDocs.rootPath}${navLocation}"]`).classList.add(UtilitySystem.config.classes.active); // eslint-disable-line
} else {
  // Remove active class from any other nav item(s)
  UtilitySystem.forEach($siteNavigation.querySelectorAll('a'), (index, value) => {
    value.classList.remove(UtilitySystem.config.classes.active);
  });
}
