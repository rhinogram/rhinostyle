import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Bucket, BucketBody, BucketHeader, Icon, Table } from '../components';
import { Live } from './components';
import BucketExample from './examples/Bucket.example.txt';
import BucketHeaderExample from './examples/BucketHeader.example.txt';

const BucketDocs = {
  type: "<code>oneOf(['default'])</code>", // eslint-disable-line single-quotes
};
const BucketScope  = {
  React,
  ReactDOM,
  Bucket,
  BucketBody,
  BucketHeader,
  Icon,
  Table,
};

const BucketHeaderDocs = {};
const BucketHeaderScope  = {
  React,
  ReactDOM,
  BucketHeader,
  Icon,
};

const BucketApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Buckets</h3>
      <p className="site-text-lead">Buckets are used to contain and separate portions of content. Buckets are most often constructed using <span className="u-text-accent">BucketHeader</span> and <span className="u-text-accent">BucketBody</span> child components.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket</h3>
      <Bucket>
        <BucketHeader title="Bucket" />
        <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
      </Bucket>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Playground</h3>
      <Live
        code={BucketExample}
        scope={BucketScope}
        component={Bucket}
        propDescriptions={BucketDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Header Playground</h3>
      <Live
        code={BucketHeaderExample}
        scope={BucketHeaderScope}
        component={BucketHeader}
        propDescriptions={BucketHeaderDocs}
      />
    </section>
  </Fragment>
);

ReactDOM.render(<BucketApp />, document.getElementById('root'));
