import React    from 'react';
import ReactDOM from 'react-dom';

import { CoverSystem, CoverContainer, Button, Input, CoverHeader, CoverBody, CoverFooter, Icon } from '../components';
import Playground from 'component-playground';


const coverContainer  = document.createElement('div');

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

  onClick = (event) => {
    event.preventDefault();
    // CoverSystem.addCover({
    //   content: this.renderContent(),
    //   visible: true,
    //   // body:         this.renderBody(),
    //   // footer:       this.renderFooter(),
    //   // icon:         'cog',
    //   // title:        'This is a Demo Cover',
    // });

    this.setState({
      visible: true,
    });
  };


  handleChange = (name, value) => {
    console.log('changing')
    const newState = {};

    newState[name] = value;
    this.setState(newState);
  }


  closeCover = () => {
    CoverSystem.removeCover();
  }

  saveChanges = () => {
  //  alert(this.state.firstName);
    this.setState({
      firstNameError: 'testing this shit',
    });
  //  this.closeCover();
  }

  renderContent = () =>
    <div>
      <CoverHeader title="test" />
      <CoverBody>
        <div className="form">
          <div className="form__group">
            <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={this.state.firstNameError} required onChange={this.handleChange} />
          </div>
          <div>
            <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={this.state.lastNameError} required onChange={this.handleChange} />
          </div>
        </div>
      </CoverBody>
      <CoverFooter>
        <div className="u-text-right">
          <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;
          <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>
        </div>
      </CoverFooter>
    </div>;


  render() {
    console.log('yoooo', this.state, this.props)
    if (this.state.visible) {
      console.log('here');
      const coverContainer  = document.createElement('div');
      document.body.insertBefore(coverContainer, document.body.childNodes[0]);
      ReactDOM.render(<CoverContainer />, coverContainer);
    }

    console.log('re rendering', this.state.firstNameError)
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
