import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';

import { Button, Label, Lightbox } from '../components';
import lightboxExample from './examples/Lightbox.example.txt';

const lightboxDocs = {};
const lightboxScope = {
  React,
  ReactDOM,
  Button,
  Lightbox,
};

const LightboxApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Lightbox <Label className="u-m-l-sm" type="accent" label="third party" /></h3>
      <p className="site-copy">We are using <a href="https://github.com/fritz-c/react-image-lightbox" target="_blank" rel="noopener noreferrer">react-image-lightbox</a> for lightbox images/galleries.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Lightbox Playground</h3>
      <Playground theme="default" docClass={Lightbox} propDescriptionMap={lightboxDocs} codeText={lightboxExample} scope={lightboxScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LightboxApp />, document.getElementById('js-app'));
