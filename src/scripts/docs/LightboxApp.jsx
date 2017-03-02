import React      from 'react';
import ReactDOM   from 'react-dom';
import Playground from 'component-playground';
import { Button, Lightbox } from '../components';

const lightboxExample  = require('raw!./examples/Lightbox.example.txt');

const lightboxDocs = {};
const lightboxScope = {
  React,
  ReactDOM,
  Button,
  Lightbox,
};

const LightboxApp = () =>
  <div>
    <h1 className="site-headline">Lightbox</h1>

    <p className="site-copy">We are using <a href="https://github.com/fritz-c/react-image-lightbox" target="_blank" rel="noopener noreferrer">react-image-lightbox</a> for lightbox images/galleries.</p>

    <section className="site-section">
      <h3 className="site-subheadline">Lightbox Playground</h3>
      <Playground docClass={Lightbox} propDescriptionMap={lightboxDocs} codeText={lightboxExample} scope={lightboxScope} noRender={false} />
    </section>
  </div>;

ReactDOM.render(<LightboxApp />, document.getElementById('js-app'));
