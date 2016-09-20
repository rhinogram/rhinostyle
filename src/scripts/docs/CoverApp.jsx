import React    from 'react';
import ReactDOM from 'react-dom';

import { CoverSystem, Cover, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const coverExample = require('raw!./examples/Cover.example.txt');
const coverHeaderExample = require('raw!./examples/CoverHeader.example.txt');
const coverBodyExample = require('raw!./examples/CoverBody.example.txt');
const coverFooterExample = require('raw!./examples/CoverFooter.example.txt');

const coverDocs = {
  className: '[Optional] - Additional class to add to cover div',
};

const coverHeaderDocs = {
  icon: '[Optional] - Attaches an Icon to the Cover Header',
  iconClassName: '[Optional] - Adds a class to the Cover Header icon',
  onClose: '[Optional] - Callback function to execute in addition to closing the cover',
  title: '[Optional] - Cover Title -  String to represent the Cover Header',
};

const coverBodyDocs = {
  size: '[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  Cover,
  CoverSystem,
  CoverHeader,
  CoverBody,
  CoverFooter,
  Icon,
};

const CoverApp = () =>
  <div>
    <h1 className="site-headline">Covers</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Cover Example</h3>
      <p className="site-copy">You can inject a cover by calling <code>CoverSystem.addCover(cover)</code>, where <code>cover</code> can be <code>Cover</code> containing <code>CoverHeader</code>, <code>CoverBody</code>, <code>CoverFooter</code>.</p>
      <Playground docClass={Cover} propDescriptionMap={coverDocs} codeText={coverExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverHeader</h3>
      <Playground docClass={CoverHeader} propDescriptionMap={coverHeaderDocs} codeText={coverHeaderExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverBody</h3>
      <Playground docClass={CoverBody} propDescriptionMap={coverBodyDocs} codeText={coverBodyExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverFooter</h3>
      <Playground docClass={CoverFooter} codeText={coverFooterExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<CoverApp />, document.getElementById('js-app'));
