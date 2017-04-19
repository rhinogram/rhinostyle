import Playground from 'component-playground';
import React      from 'react';
import ReactDOM   from 'react-dom';

import { CoverSystem, Cover, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon, UtilityInlineGrid } from '../components';
import coverBodyExample   from './examples/CoverBody.example.txt';
import coverExample       from './examples/Cover.example.txt';
import coverFooterExample from './examples/CoverFooter.example.txt';
import coverHeaderExample from './examples/CoverHeader.example.txt';

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
  contentMiddle: 'Vertically center content within cover',
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
  UtilityInlineGrid,
};

const CoverApp = () =>
  <div>
    <section className="site-section">
      <h3 className="site-subheadline">Cover Example</h3>
      <p className="site-copy">You can inject a cover by calling <code>CoverSystem.addCover(cover)</code>, where <code>cover</code> can be <code>Cover</code> containing <code>CoverHeader</code>, <code>CoverBody</code>, <code>CoverFooter</code>.</p>
      <Playground theme="default" docClass={Cover} propDescriptionMap={coverDocs} codeText={coverExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverHeader</h3>
      <Playground theme="default" docClass={CoverHeader} propDescriptionMap={coverHeaderDocs} codeText={coverHeaderExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverBody</h3>
      <Playground theme="default" docClass={CoverBody} propDescriptionMap={coverBodyDocs} codeText={coverBodyExample} scope={exampleScope} noRender={false} />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">CoverFooter</h3>
      <Playground theme="default" docClass={CoverFooter} codeText={coverFooterExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<CoverApp />, document.getElementById('js-app'));
