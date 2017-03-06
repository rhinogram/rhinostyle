/* eslint-disable */
switch (location.pathname) {
  case '/avatars/':
    require('./AvatarApp');
    break;
  case '/buckets/':
    require('./BucketApp');
    break;
  case '/buttons/':
    require('./ButtonApp');
    break;
  case '/close/':
    require('./CloseApp');
    break;
  case '/covers/':
    require('./CoverApp');
    break;
  case '/datepicker/':
    require('./DatePickerApp');
    break;
  case '/dropdowns/':
    require('./DropdownApp');
    break;
  case '/feedback/':
    require('./FeedbackApp');
    break;
  case '/forms/':
    require('./FormApp');
    break;
  case '/icons/':
    require('./IconApp');
    break;
  case '/labels/':
    require('./LabelApp');
    break;
  case '/lightbox/':
    require('./LightboxApp');
    break;
  case '/loaders/':
    require('./LoaderApp');
    break;
  case '/messages/':
    require('./MessageApp');
    break;
  case '/modals/':
    require('./ModalApp');
    break;
  case '/navigation/':
    require('./NavigationApp');
    break;
  case '/pills/':
    require('./PillApp');
    break;
  case '/progressbars/':
    require('./ProgressBarApp');
    break;
  case '/scrollbars/':
    require('./ScrollBarApp');
    break;
  case '/table/':
    require('./TableApp');
    break;
  case '/tabs/':
    require('./TabsApp');
    break;
  case '/tooltips/':
    require('./TooltipsApp');
    break;
  case '/utility-components/':
    require('./UtilityComponentsApp');
    break;
}

import './Init';

/* eslint-enable */
