import React from 'react';
import ReactDOM from 'react-dom';

import { Bucket, BucketBody, BucketHeader, Icon, Table } from '../components';
import { Live } from './components';
import bucketExample from './examples/Bucket.example.txt';
import bucketHeaderExample from './examples/BucketHeader.example.txt';

const bucketDocs = {};
const bucketScope  = {
  React,
  ReactDOM,
  Bucket,
  BucketBody,
  BucketHeader,
  Icon,
  Table,
};

const bucketHeaderDocs = {
  className: 'Include additional class name(s)',
  icon: 'Icon name',
  iconClassName: 'Include additional class name(s) for icon',
  title: 'Include tile for header',
};
const bucketHeaderScope  = {
  React,
  ReactDOM,
  BucketHeader,
  Icon,
};

const BucketApp = () => (
  <div>
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
        code={bucketExample}
        scope={bucketScope}
        component={Bucket}
        propDescriptions={bucketDocs}
      />
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Header Playground</h3>
      <Live
        code={bucketHeaderExample}
        scope={bucketHeaderScope}
        component={BucketHeader}
        propDescriptions={bucketHeaderDocs}
      />
    </section>
  </div>
);

ReactDOM.render(<BucketApp />, document.getElementById('js-app'));
