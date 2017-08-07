import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Icon } from '../components';
import iconExample from './examples/Icon.example.txt';

const iconDocs = {
  bump: '[Optional] - Bump [down | up] - used to move icon up or down slightly for precise positioning',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Required] - Icon name',
};
const exampleScope  = {
  React,
  ReactDOM,
  Icon,
};

// Add new icons here
const icons = [
  'add',
  'arrow-left',
  'arrow-right',
  'attachment',
  'bank',
  'bar-graph',
  'birthday',
  'calendar',
  'camera',
  'checkmark',
  'checkmark-circle',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'clock',
  'close',
  'cog',
  'compose',
  'copy',
  'desktop',
  'dots-horizontal',
  'dots-vertical',
  'download',
  'credit-card',
  'email',
  'file',
  'filter',
  'flag',
  'forward',
  'gender-female',
  'gender-male',
  'globe',
  'hipaa',
  'inbox',
  'info-circle',
  'link',
  'lock',
  'logo-circle-facebook',
  'logo-twitter',
  'logout',
  'minor',
  'mobile',
  'note',
  'notification',
  'notification-off',
  'pencil',
  'phone',
  'pin',
  'printer',
  'question-circle',
  'reply',
  'search',
  'sms',
  'sms-dots',
  'star',
  'tag',
  'trash',
  'upload',
  'user',
  'warning',
];

const IconApp = () =>
  (<div>
    <section className="site-section">
      <h3 className="site-subheadline">SVG Icons</h3>

      <div className="row">
        {icons.map(value =>
          (<div className="column-6@xsmall column-4@small column-3@medium">
            <div className="site-swatch">
              <div className="site-swatch__sample">
                <Icon icon={value} />
              </div>
              <div className="site-swatch__text"><code>{value}</code></div>
            </div>
          </div>),
        )}
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground theme="default" docClass={Icon} propDescriptionMap={iconDocs} codeText={iconExample} scope={exampleScope} noRender={false} />
    </section>
  </div>);

ReactDOM.render(<IconApp />, document.getElementById('js-app'));
