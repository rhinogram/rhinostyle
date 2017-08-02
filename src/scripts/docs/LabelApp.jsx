import React    from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';

import { Label, UtilityInlineGrid } from '../components';
import labelExample from './examples/Label.example.txt';

const labelDocs = {
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Icon name',
  iconBump: '[Optional] - Icon bump [down | up] - used to move icon up or down slightly for precise positioning',
  label: '[Required] - Label text',
  type: '[Optional] - Label type -  [default | primary | secondary | accent]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Label,
  UtilityInlineGrid,
};

const LabelApp = () =>
  (<div>
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
      <Playground theme="default" docClass={Label} propDescriptionMap={labelDocs} codeText={labelExample} scope={exampleScope} noRender={false} />
    </section>

  </div>);

ReactDOM.render(<LabelApp />, document.getElementById('js-app'));
