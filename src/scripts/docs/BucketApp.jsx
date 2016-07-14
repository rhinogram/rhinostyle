import React    from 'react';
import ReactDOM from 'react-dom';

import { Bucket, BucketBody, BucketHeader, Icon } from '../components';

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
  BucketHeader,
  Icon,
};

const BucketApp = () =>
  <div>
    <h1 className="site-headline">Buckets</h1>

    <section className="site-section">
      <h3 className="site-subheadline">About Buckets</h3>
      <p className="site-text-lead">Buckets are used to contain and separate portions of content. Buckets must contain a <span className="u-text-accent">BucketBody</span> child component. Optionally include <span className="u-text-accent">BucketHeader</span> child component.</p>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Types</h3>
      <p className="site-copy"><code>type="default | primary"</code></p>
      <div className="site-example-buckets">
        <Bucket>
          <BucketHeader title="Bucket Header" icon="pencil" />
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
        <Bucket type="primary">
          <BucketHeader title="Bucket Header" icon="sms" />
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Sizes</h3>
      <div>
        <p className="site-copy"><code>size="small"</code></p>
        <div className="site-example-buckets">
          <Bucket size="small">
            <BucketHeader title="Bucket Header" icon="pencil" />
            <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
          </Bucket>
        </div>
      </div>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Bucket Examples</h3>
      <div className="site-example-buckets">
        <Bucket>
          <BucketHeader className="u-flex-justify-between" title="Bucket Header That is Really Super Long" icon="pencil">
            <div>
              <a href="" className="u-text-underline">Edit</a> | <a href="" className="u-text-underline">Delete</a>
            </div>
          </BucketHeader>
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
        <Bucket>
          <BucketHeader title="Bucket Header" icon="pencil" className="u-bg-gray-lightest" />
          <BucketBody className="u-bg-gray-lightest">Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
        <Bucket>
          <BucketBody className="u-bg-gray-lightest">Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
        <Bucket>
          <BucketHeader className="u-bg-gray-lightest">Bucket Header without Title</BucketHeader>
          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>
        </Bucket>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Bucket} propDescriptionMap={bucketDocs} codeText={bucketExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<BucketApp />, document.getElementById('js-app'));
