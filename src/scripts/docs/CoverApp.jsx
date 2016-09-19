import React    from 'react';
import ReactDOM from 'react-dom';

import { CoverSystem, CoverContainer, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const coverExample = require('raw!./examples/Cover.example.txt');

const coverDocs = {
  body: '[Required] - Cover Body - Typically represented by a renderBody function that returns JSX',
  footer: '[Required] - Cover Footer - Typically represented by a renderFooter function that returns JSX',
  icon: '[Optional] - Attaches an Icon to the Cover Header',
  iconClassName: '[Optional] - Adds a class to the Cover Header icon',
  size: '[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body',
  title: '[Required] - Cover Title -  String to represent the Cover Header',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  CoverSystem,
  Icon,
};

class CoverApp extends React.Component {

  state = {
    firstName: '',
    lastName: '',
  }

  onClick = () => {
    CoverSystem.addCover(this.renderContent());
  };

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;
    this.setState(newState);
  }

  closeCover = () => {
    CoverSystem.removeCover();
  }

  saveChanges = () => {
    const errors = {};

    if (!this.state.firstName) {
      errors.firstName = 'FirstName is required!';
    }

    const errorCount  = Object.keys(errors).length

    if (errorCount > 0) {
      CoverSystem.refreshCover(this.renderContent(errors));
    } else {
      this.closeCover();
    }
  }

  renderContent = (errors) => {
    const errorList = errors || {};

    return (
      <div>
        <CoverHeader title="This is a sample Cover" />
        <CoverBody>
          <div className="form">
            <div className="form__group">
              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />
            </div>
            <div>
              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />
            </div>
          </div>
        </CoverBody>
        <CoverFooter>
          <div className="u-text-right">
            <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;
            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>
          </div>
        </CoverFooter>
      </div>
    );
  }

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
