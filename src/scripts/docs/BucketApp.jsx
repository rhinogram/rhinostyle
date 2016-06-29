import React    from 'react';
import ReactDOM from 'react-dom';

import { Bucket } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const bucketExample = require('raw!./examples/Bucket.example.txt');
const bucketDocs = {
  className: '[Optional] - Include additional class name(s)',
  size: '[Optional] - Bucket size -  [small]',
  type: '[Optional] - Bucket type -  [default | warm]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Bucket,
};

const BucketApp = () =>
  <div>
    <h1 className="site-headline">Buckets</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Buckets</h3>
      <p className="u-text-lead">Buckets are used to contain and separate portions of content.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Types</h3>
      <p className="site-copy"><code>type="default | warm"</code></p>
      <div className="site-example-buckets">
        <Bucket>I'm a default bucket.</Bucket>
        <Bucket type="warm">I'm a warm bucket.</Bucket>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Sizes</h3>
      <div>
        <p className="site-copy"><code>size="small"</code></p>
        <div className="site-example-buckets">
          <Bucket size="small">I'm a small bucket.</Bucket>
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Bucket} propDescriptionMap={bucketDocs} codeText={bucketExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<BucketApp />, document.getElementById('js-app'));
