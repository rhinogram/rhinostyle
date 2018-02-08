import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Icon, UtilityInlineGrid } from '../components';
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
  UtilityInlineGrid,
};

// Add new icons here
const icons = [
  'add-circle',
  'alert-triangle',
  'announce',
  'arrow-left',
  'arrow-right',
  'assign',
  'attachment',
  'calendar',
  'camera',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'chat-group',
  'chat',
  'checkmark',
  'clock',
  'close',
  'cog',
  'desktop',
  'dots-horizontal',
  'dots-vertical',
  'download',
  'email',
  'facebook',
  'filter',
  'hipaa',
  'inbox',
  'info-circle',
  'lock',
  'log-in',
  'log-out',
  'minor',
  'mobile',
  'note',
  'phone',
  'question-circle',
  'rotate',
  'search',
  'send',
  'star',
  'to-from',
  'touchid',
  'trash',
  'twitter',
  'unlock',
  'upload',
  'user-group',
  'user',
];

const IconApp = () => (
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">SVG Icons</h3>

      <div className="row">
        {icons.map(value => (
          <div key={value} className="column-6@xsmall column-4@small column-3@medium">
            <div className="site-swatch">
              <div className="site-swatch__sample">
                <Icon icon={value} />
              </div>
              <div className="site-swatch__text"><code>{value}</code></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>
      <Playground theme="default" docClass={Icon} propDescriptionMap={iconDocs} codeText={iconExample} scope={exampleScope} noRender={false} />
    </section>
  </div>
);

ReactDOM.render(<IconApp />, document.getElementById('js-app'));
