import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Cover, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon, UtilityInlineGrid } from '../components';
import { Live } from './components';
import CoverBodyExample from './examples/CoverBody.example.txt';
import CoverExample from './examples/Cover.example.txt';
import CoverFooterExample from './examples/CoverFooter.example.txt';
import CoverHeaderExample from './examples/CoverHeader.example.txt';

const CoverDocs = {};
const CoverHeaderDocs = {
  icon: 'Attaches Icon to the header',
  iconClassName: 'Adds class to the header Icon',
};
const CoverBodyDocs = {
  size: "<code>oneOf(['small', 'medium', 'large'])</code>", // eslint-disable-line single-quotes
  contentMiddle: 'Vertically center content within Cover',
};
const CoverFooterDocs = {};

const CoverScope = {
  React,
  ReactDOM,
  Button,
  Input,
  Cover,
  CoverHeader,
  CoverBody,
  CoverFooter,
  Icon,
  UtilityInlineGrid,
};

const CoverApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Cover Example</h3>
      <p className="site-copy">Although the <code>&lt;Cover /&gt;</code> component is written inline, it actually renders outside of the main application to retiain proper styling.</p>

      <Live
        code={CoverExample}
        scope={CoverScope}
        component={Cover}
        propDescriptions={CoverDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverHeader</h3>

      <Live
        code={CoverHeaderExample}
        scope={CoverScope}
        component={CoverHeader}
        propDescriptions={CoverHeaderDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverBody</h3>

      <Live
        code={CoverBodyExample}
        scope={CoverScope}
        component={CoverBody}
        propDescriptions={CoverBodyDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverFooter</h3>

      <Live
        code={CoverFooterExample}
        scope={CoverScope}
        component={CoverFooter}
        propDescriptions={CoverFooterDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<CoverApp />, document.getElementById('root'));
