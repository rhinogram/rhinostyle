import React    from 'react';
import ReactDOM from 'react-dom';

import { NotificationActions, Callout, Icon, Toast } from '../components';

import Playground from 'component-playground';

const feedbackExample = require('raw!./examples/Feedback.example.txt');
const exampleScope    = {
  React: React,
  ReactDOM: ReactDOM,
  Callout: Callout,
  Toast: Toast,
  Icon: Icon
};

const FeedbackApp = React.createClass({
  displayName: 'Rhinostyle Feedback Examples',

  onClick(event) {
    event.preventDefault();

    NotificationActions.addNotification({
      type: 'danger',
      dismissable: true,
      body: 'This is an alert in a toast notification',
      onDismiss: () => { alert('You dismissed that toast'); }
    });
  },

  render() {
    return (
      <div>
        <h1 className="site-headline">Feedback</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Callouts</h3>
          <div className="row">
            <div className="col-sm-10">
              <Callout type="danger" head="Callout Danger" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
              <Callout type="default" head="Callout Default" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
              <Callout type="info" head="Callout Info" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
            </div>
          </div>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Toast Notifications</h3>
          <Toast type="default" body={<span>Default notification - <a href="#" className="notify__link" onClick={this.onClick}>click link</a></span>} />
          <Toast type="secondary" body={<span><Icon icon="checkmark" /> Default notification - <a href="#" className="notify__link">click link</a></span>} />
          <Toast type="danger" body={<span>Danger notification - <a href="#" className="notify__link">click link</a></span>} />
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={feedbackExample} scope={exampleScope} noRender={false} />
        </section>
      </div>
    );
  }
});

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
