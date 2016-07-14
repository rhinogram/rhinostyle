import React    from 'react';
import ReactDOM from 'react-dom';

import { Bucket, BucketBody } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const bucketExample = require('raw!./examples/Bucket.example.txt');
const bucketDocs = {
  className: '[Optional] - Include additional class name(s)',
  size: '[Optional] - Bucket size -  [small]',
  type: '[Optional] - Bucket type -  [default | primary]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Bucket,
  BucketBody,
};

const BucketApp = () =>
  <div>
    <h1 className="site-headline">Buckets</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Buckets</h3>
      <p className="site-text-lead">Buckets are used to contain and separate portions of content. Buckets must contain a <span className="u-text-accent">BucketBody</span> child component. Optionally include <span className="u-text-accent">BucketHeader</span> and/or <span className="u-text-accent">BucketFooter</span> child components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Types</h3>
      <p className="site-copy"><code>type="default | primary"</code></p>
      <div className="site-example-buckets">
        <Bucket>
          <BucketBody>Bucket body</BucketBody>
        </Bucket>
        <Bucket type="primary">
          <BucketBody>Bucket body</BucketBody>
        </Bucket>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Sizes</h3>
      <div>
        <p className="site-copy"><code>size="small"</code></p>
        <div className="site-example-buckets">
          <Bucket size="small">
            <BucketBody>I'm a default bucket body.</BucketBody>
          </Bucket>
        </div>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Bucket} propDescriptionMap={bucketDocs} codeText={bucketExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<BucketApp />, document.getElementById('js-app'));
