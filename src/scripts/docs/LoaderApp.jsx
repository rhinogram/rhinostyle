import React from 'react';
import ReactDOM from 'react-dom';

import { LoaderCircle, LoaderPulse, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';
import { Live } from './components';
import LoaderCircleExample from './examples/LoaderCircle.example.txt';
import LoaderPulseExample from './examples/LoaderPulse.example.txt';

const LoaderCircleDocs = {
  pause: 'Pause animation. This is normally used if the loader is in the DOM, but not visible - to save on performance',
  size: "<code>oneOf(['xsmall', 'small', 'large'])</code>",
};
const LoaderCircleScope = {
  React,
  ReactDOM,
  LoaderCircle,
  UtilityInlineGrid,
};

const LoaderPulseDocs = {
  pause: 'Pause animation. This is normally used if the loader is in the DOM, but not visible - to save on performance',
  type: "<code>oneOf(['default', 'accent', 'secondary'])</code>",
};
const LoaderPulseScope = {
  React,
  ReactDOM,
  LoaderPulse,
};

const LoaderApp = () => (
  <>
    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Sizes</h3>
      <p className="site-copy">
        <code>size=&quot;xsmall | small | large&quot;</code>
      </p>
      <UtilityInlineGrid>
        <LoaderCircle size="xsmall" />
        <LoaderCircle size="small" />
        <LoaderCircle />
        <LoaderCircle size="large" />
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderCircle Playground</h3>

      <Live
        code={LoaderCircleExample}
        scope={LoaderCircleScope}
        component={LoaderCircle}
        propDescriptions={LoaderCircleDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Types</h3>
      <p className="site-copy">
        <code>type=&quot;default | secondary | accent&quot;</code>
      </p>
      <UtilityList space>
        <UtilityListItem>
          <LoaderPulse />
        </UtilityListItem>
        <UtilityListItem>
          <LoaderPulse type="accent" />
        </UtilityListItem>
        <UtilityListItem>
          <LoaderPulse type="secondary" />
        </UtilityListItem>
      </UtilityList>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">LoaderPulse Playground</h3>

      <Live
        code={LoaderPulseExample}
        scope={LoaderPulseScope}
        component={LoaderPulse}
        propDescriptions={LoaderPulseDocs}
      />
    </section>
  </>
);

ReactDOM.render(<LoaderApp />, document.getElementById('root'));
