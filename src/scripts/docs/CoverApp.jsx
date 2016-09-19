import React    from 'react';
import ReactDOM from 'react-dom';

import { CoverSystem, CoverContainer, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon } from '../components';
import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const coverExample = require('raw!./examples/Cover.example.txt');
const coverHeaderExample = require('raw!./examples/CoverHeader.example.txt');
const coverBodyExample = require('raw!./examples/CoverBody.example.txt');
const coverFooterExample = require('raw!./examples/CoverFooter.example.txt');

const coverHeaderDocs = {
  icon: '[Optional] - Attaches an Icon to the Cover Header',
  iconClassName: '[Optional] - Adds a class to the Cover Header icon',
  title: '[Optional] - Cover Title -  String to represent the Cover Header',
};

const coverBodyDocs = {
  size: '[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body',
};

const exampleScope  = {
  React,
  ReactDOM,
  Button,
  Input,
  CoverSystem,
  CoverHeader,
  CoverBody,
  CoverFooter,
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

    if (!this.state.lastName) {
      errors.lastName = 'LastName is required!';
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
      <div className="cover">
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
          <p className="site-copy">You can inject a cover by calling <code>CoverSystem.addCover(cover)</code>, where <code>cover</code> can be <code>div className="cover"</code> containing <code>CoverHeader</code>, <code>CoverBody</code>, <code>CoverFooter</code>.</p>
          <Playground docClass={CoverContainer.default} codeText={coverExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">CoverHeader</h3>
          <Playground docClass={CoverHeader} propDescriptionMap={coverHeaderDocs} codeText={coverHeaderExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">CoverBody</h3>
          <Playground docClass={CoverBody} propDescriptionMap={coverBodyDocs} codeText={coverBodyExample} scope={exampleScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">CoverFooter</h3>
          <Playground docClass={CoverFooter} codeText={coverFooterExample} scope={exampleScope} noRender={false} />
        </section>

      </div>
    );
  }
}

ReactDOM.render(<CoverApp />, document.getElementById('js-app'));
