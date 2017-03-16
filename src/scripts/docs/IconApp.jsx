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
};

const IconApp = () =>
  <div>
    <h1 className="site-headline">Icons</h1>

    <section className="site-section">
      <h3 className="site-subheadline">SVG Icons</h3>

      <UtilityInlineGrid>
        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="add" />
          </div>
          <div className="site-swatch__text"><strong>Add</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="arrow-left" />
          </div>
          <div className="site-swatch__text"><strong>Arrow Left</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="arrow-right" />
          </div>
          <div className="site-swatch__text"><strong>Arrow Right</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="attachment" />
          </div>
          <div className="site-swatch__text"><strong>Attachment</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="bank" />
          </div>
          <div className="site-swatch__text"><strong>Bank</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="bar-graph" />
          </div>
          <div className="site-swatch__text"><strong>Bar Graph</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="bell" />
          </div>
          <div className="site-swatch__text"><strong>Bell</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="calendar" />
          </div>
          <div className="site-swatch__text"><strong>Calendar</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="camera" />
          </div>
          <div className="site-swatch__text"><strong>Camera</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="checkmark" />
          </div>
          <div className="site-swatch__text"><strong>Checkmark</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="checkmark-circle" />
          </div>
          <div className="site-swatch__text"><strong>Checkmark Circle</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="chevron-left" />
          </div>
          <div className="site-swatch__text"><strong>Chevron Left</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="chevron-right" />
          </div>
          <div className="site-swatch__text"><strong>Chevron Right</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="chevron-up" />
          </div>
          <div className="site-swatch__text"><strong>Chevron Up</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="chevron-down" />
          </div>
          <div className="site-swatch__text"><strong>Chevron Down</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="clock" />
          </div>
          <div className="site-swatch__text"><strong>Clock</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="close" />
          </div>
          <div className="site-swatch__text"><strong>Close</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="cog" />
          </div>
          <div className="site-swatch__text"><strong>Cog</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="compose" />
          </div>
          <div className="site-swatch__text"><strong>Compose</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="download" />
          </div>
          <div className="site-swatch__text"><strong>Download</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="credit-card" />
          </div>
          <div className="site-swatch__text"><strong>Credit Card</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="email" />
          </div>
          <div className="site-swatch__text"><strong>Email</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="file" />
          </div>
          <div className="site-swatch__text"><strong>File</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="filter" />
          </div>
          <div className="site-swatch__text"><strong>Filter</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="flag" />
          </div>
          <div className="site-swatch__text"><strong>Flag</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="forward" />
          </div>
          <div className="site-swatch__text"><strong>Forward</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="gender-female" />
          </div>
          <div className="site-swatch__text"><strong>Gender Female</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="gender-male" />
          </div>
          <div className="site-swatch__text"><strong>Gender Male</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="globe" />
          </div>
          <div className="site-swatch__text"><strong>Globe</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="inbox" />
          </div>
          <div className="site-swatch__text"><strong>Inbox</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="info-circle" />
          </div>
          <div className="site-swatch__text"><strong>Info Circle</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="link" />
          </div>
          <div className="site-swatch__text"><strong>Link</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="lock" />
          </div>
          <div className="site-swatch__text"><strong>Lock</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="logo-circle-facebook" />
          </div>
          <div className="site-swatch__text"><strong>Logo Circle Facebook</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="logo-twitter" />
          </div>
          <div className="site-swatch__text"><strong>Logo Twitter</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="note" />
          </div>
          <div className="site-swatch__text"><strong>Note</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="pencil" />
          </div>
          <div className="site-swatch__text"><strong>Pencil</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="phone" />
          </div>
          <div className="site-swatch__text"><strong>Phone</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="pin" />
          </div>
          <div className="site-swatch__text"><strong>Pin</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="printer" />
          </div>
          <div className="site-swatch__text"><strong>Printer</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="question-circle" />
          </div>
          <div className="site-swatch__text"><strong>Question Circle</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="reply" />
          </div>
          <div className="site-swatch__text"><strong>Reply</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="search" />
          </div>
          <div className="site-swatch__text"><strong>Search</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="sms" />
          </div>
          <div className="site-swatch__text"><strong>SMS</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="sms-dots" />
          </div>
          <div className="site-swatch__text"><strong>SMS Dots</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="star" />
          </div>
          <div className="site-swatch__text"><strong>Star</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="subtract" />
          </div>
          <div className="site-swatch__text"><strong>Subtract</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="tag" />
          </div>
          <div className="site-swatch__text"><strong>Tag</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="trash" />
          </div>
          <div className="site-swatch__text"><strong>Trash</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="upload" />
          </div>
          <div className="site-swatch__text"><strong>Upload</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="user" />
          </div>
          <div className="site-swatch__text"><strong>User</strong></div>
        </div>

        <div className="site-swatch">
          <div className="site-swatch__sample">
            <Icon icon="warning" />
          </div>
          <div className="site-swatch__text"><strong>Warning</strong></div>
        </div>
      </UtilityInlineGrid>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground theme="default" docClass={Icon} propDescriptionMap={iconDocs} codeText={iconExample} scope={exampleScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<IconApp />, document.getElementById('js-app'));
