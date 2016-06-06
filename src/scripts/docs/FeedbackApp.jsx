import React    from 'react';
import ReactDOM from 'react-dom';

import { NotificationActions, Callout, Icon, Toast } from '../components';

import Playground from 'component-playground';

const calloutExample = require('raw!./examples/Callout.example.txt');
const toastExample   = require('raw!./examples/Toast.example.txt');
const toastScope   = {
  React: React,
  ReactDOM: ReactDOM,
  Toast: Toast,
  Icon: Icon
};
const calloutScope   = {
  React: React,
  ReactDOM: ReactDOM,
  Callout: Callout
};

class FeedbackApp extends React.Component {
  static displayName = 'Rhinostyle Feedback Examples';

  onClick = (event) => {
    event.preventDefault();

    NotificationActions.addNotification({
      autoDismiss: true,
      autodismissTime: 5000,
      body: 'This is an alert in a toast notification',
      onDismiss: () => {
        alert('You dismissed that toast');
      },
      type: 'danger'
    });
  }

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

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={calloutExample} scope={calloutScope} noRender={false} />
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Toast Notifications</h3>
          <Toast type="default" body={<span>Default notification - <a href="#" className="toast__link" onClick={this.onClick}>click link</a></span>} />
          <Toast type="secondary" body={<span><Icon icon="checkmark" /> Default notification - <a href="#" className="toast__link">click link</a></span>} />
          <Toast type="danger" body={<span>Danger notification - <a href="#" className="toast__link">click link</a></span>} />
        </section>

        <section>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={toastExample} scope={toastScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
