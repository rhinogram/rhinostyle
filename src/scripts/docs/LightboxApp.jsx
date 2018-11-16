import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Button, Label, Lightbox } from '../components';
import { Live } from './components';
import LightboxExample from './examples/Lightbox.example.txt';

const LightboxDocs = {};
const LightboxScope = {
  React,
  ReactDOM,
  Button,
  Lightbox,
};

const LightboxApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Lightbox <Label className="u-m-l-small" type="accent" label="third party" /></h3>
      <p className="site-copy">
        We are using
        <a href="https://github.com/fritz-c/react-image-lightbox" target="_blank" rel="noopener noreferrer">react-image-lightbox</a>
        for lightbox images/galleries.
      </p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Lightbox Playground</h3>

      <Live
        code={LightboxExample}
        scope={LightboxScope}
        component={Lightbox}
        propDescriptions={LightboxDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<LightboxApp />, document.getElementById('root'));
