import React    from 'react';
import ReactDOM from 'react-dom';

import { CoverSystem, CoverContainer, Button, Input } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const coverExample = require('raw!./examples/Cover.example.txt');

const coverDocs = {
  body: '[Required] - Modal Body - Typically represented by a renderBody function that returns JSX',
  footer: '[Required] - Modal Footer - Typically represented by a renderFooter function that returns JSX',
  icon: '[Optional] - Attaches an Icon to the Modal Header',
  size: '[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body',
  title: '[Required] - Modal Title -  String to represent the Modal Header',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  CoverSystem,
};

class CoverApp extends React.Component {

  onClick = (event) => {
    event.preventDefault();
    CoverSystem.addCover({
      body:         this.renderBody(),
      footer:       this.renderFooter(),
      icon:         'pencil',
      title:        'This is a Demo Cover',
    });
  };

  closeCover = () => {
    CoverSystem.removeCover();
  }

  saveChanges = () => {
    alert('the changes have been saved');
    this.closeCover();
  }

  renderBody = () =>
    <div className="form">
      <div className="form__group">
        <Input label="First Name" />
      </div>
      <div>
        <Input label="Last Name" className="u-m-b-0" />
      </div>
    </div>;

  renderFooter = () =>
    <div>
      <Button type="default" onClick={this.closeCover}>Close</Button>
      <Button type="primary" onClick={this.saveChanges}>Save Changes</Button>
    </div>;

  render() {
    return (
      <div>
        <h1 className="site-headline">Covers</h1>
        <section className="site-section">
          <h3 className="site-subheadline">Cover Example</h3>
          <p className="site-copy">To see a cover in action, <a href="#" onClick={this.onClick}>click here</a>.</p>
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <p className="site-copy">The following properties can be used in the object you pass into CoverSystem.addCover().</p>
          <Playground docClass={CoverContainer.default} propDescriptionMap={coverDocs} codeText={coverExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<CoverApp />, document.getElementById('js-app'));
