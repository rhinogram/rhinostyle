/*  eslint-disable global-require */

// Figure out current URL
const url = window.location.pathname;
const urlSegments = url.split('/');
const currentUrl = urlSegments[urlSegments.length - 2];

switch (currentUrl) { // eslint-disable-line default-case
  case 'avatars':
    require('./AvatarApp');
    break;
  case 'buckets':
    require('./BucketApp');
    break;
  case 'buttons':
    require('./ButtonApp');
    break;
  case 'close':
    require('./CloseApp');
    break;
  case 'covers':
    require('./CoverApp');
    break;
  case 'datepicker':
    require('./DateApp');
    break;
  case 'dropdowns':
    require('./DropdownApp');
    break;
  case 'feedback':
    require('./FeedbackApp');
    break;
  case 'forms':
    require('./FormApp');
    break;
  case 'grid':
    require('./GridApp');
    break;
  case 'icons':
    require('./IconApp');
    break;
  case 'labels':
    require('./LabelApp');
    break;
  case 'lightbox':
    require('./LightboxApp');
    break;
  case 'loaders':
    require('./LoaderApp');
    break;
  case 'messages':
    require('./MessageApp');
    break;
  case 'modals':
    require('./ModalApp');
    break;
  case 'navigation':
    require('./NavigationApp');
    break;
  case 'pills':
    require('./PillApp');
    break;
  case 'progressbars':
    require('./ProgressBarApp');
    break;
  case 'resources':
    require('./ResourceApp');
    break;
  case 'scrollbars':
    require('./ScrollbarApp');
    break;
  case 'tables':
    require('./TableApp');
    break;
  case 'tabs':
    require('./TabsApp');
    break;
  case 'tooltips':
    require('./TooltipsApp');
    break;
  case 'utility-components':
    require('./UtilityComponentsApp');
    break;
  case 'variable-messages':
    require('./VariableMessageApp');
    break;
}

require('./init');

/* eslint-enable */
