import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Label, UtilityInlineGrid } from '../components';
import { Live } from './components';
import LabelExample from './examples/Label.example.txt';

const LabelDocs = {
  iconBump: "Move icon up or down slightly for precise positioning <code>oneOf(['down', 'up'])</code>", // eslint-disable-line single-quotes
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent'])</code>", // eslint-disable-line single-quotes
};
const LabelScope  = {
  React,
  ReactDOM,
  Label,
  UtilityInlineGrid,
};

const LabelApp = () => (
  <Fragment>
    <section className="site-section">
      <h3 className="site-subheadline">Label Types</h3>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Label label="DEFAULT" />
          <Label type="secondary" label="SECONDARY" />
          <Label type="accent" label="ACCENT" />
          <Label type="danger" label="DANGER" />
          <Label label="DEFAULT" icon="cog" />
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b">
        <UtilityInlineGrid>
          <Label label="Default" />
          <Label type="secondary" label="Secondary" />
          <Label type="accent" label="Accent" />
          <Label type="danger" label="Danger" />
          <Label label="Default" icon="cog" />
        </UtilityInlineGrid>
      </div>
      <UtilityInlineGrid>
        <Label label="default" />
        <Label type="secondary" label="secondary" />
        <Label type="accent" label="accent" />
        <Label type="danger" label="danger" />
        <Label label="default" icon="cog" />
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Playground</h3>

      <Live
        code={LabelExample}
        scope={LabelScope}
        component={Label}
        propDescriptions={LabelDocs}
      />
    </section>

  </Fragment>
);

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
