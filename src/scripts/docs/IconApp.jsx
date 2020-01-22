import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Icon, UtilityInlineGrid } from '../components';
import { Live } from './components';
import IconExample from './examples/Icon.example.txt';

const IconDocs = {
  bump: "Move icon up or down slightly for precise positioning <code>oneOf(['down', 'up'])</code>", // eslint-disable-line single-quotes
};
const IconScope = {
  React,
  ReactDOM,
  Icon,
  UtilityInlineGrid,
};

// Add new icons here
const icons = [
  'analytics',
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
  'heart',
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
  'empty-state',
  'contacts',
  'rhinopay',
  'preview',
  'empty-state-mentions',
  'globe',
];

const IconApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">SVG Icons</h3>
      <div>Adding <span className="u-text-accent">Icons</span> to <code>RhinoStyle</code> requires a few simple steps in a set order.
         With <code>gulp serve</code> running, add the icon file to the <code>/src/svg</code> directory. In a new terminal window run <code>gulp icons</code>.
         This will generate a new <code>icons.json</code> file that consists of a flattened array with your newly added <span className="u-text-accent">Icon</span>.
         Next, in <code>IconApp.jsx</code> add the filename of your new <span className="u-text-accent">Icon</span> to the icons array near the top of the file.
         Your icon should now be visible on the <code>/icons</code> page.
        <div className="u-m-b u-m-t">
          <strong>Note: </strong>There are two classes available for <span className="u-text-accent">Icons</span>: <code>icon-stroke</code> and <code>icon-fill</code>.
             These are required for stroked svg paths and filled svg paths, as they override the <span className="u-text-accent">Icon</span>
           &nbsp;color and allow for dynamic coloring via props.
        </div>
      </div>


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

      <Live
        code={IconExample}
        scope={IconScope}
        component={Icon}
        propDescriptions={IconDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<IconApp />, document.getElementById('root'));
