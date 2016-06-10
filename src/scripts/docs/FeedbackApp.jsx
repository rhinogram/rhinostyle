import React    from 'react';
import ReactDOM from 'react-dom';

import { NotificationActions, Callout, Icon, Toast } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const calloutExample = require('raw!./examples/Callout.example.txt');
const toastExample   = require('raw!./examples/Toast.example.txt');
const toastScope     = {
  React,
  ReactDOM,
  Toast,
  Icon,
};
const calloutScope   = {
  React,
  ReactDOM,
  Callout,
};

class FeedbackApp extends React.Component {
  static displayName = 'Rhinostyle Feedback Examples';

  onClick = (event) => {
    event.preventDefault();

    NotificationActions.addNotification({
      body: 'This is an alert in a toast notification',
      icon: 'warning',
      type: 'danger',
      onDismiss() {
        /* eslint no-console:0 */
        console.log('I run when the notification was dismissed');
      },
    });
  }

  render() {
    return (
      <div>
        <h1 className="site-headline">Feedback</h1>

        <section className="site-section">
          <h3 className="site-subheadline">Callouts</h3>
          <div className="row u-m-b-lg">
            <div className="col-sm-10">
              <div className="site-example-callouts">
                <Callout type="danger" head="Callout Danger" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
                <Callout type="default" head="Callout Default" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
                <Callout type="info" head="Callout Info" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />
              </div>
            </div>
          </div>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={calloutExample} scope={calloutScope} noRender={false} />
        </section>
        <section>
          <h3 className="site-subheadline">Toast Notifications</h3>
          <p className="site-copy">To see a toast in action, <a href="#" onClick={this.onClick}>click here</a>.</p>
          <div className="site-example-toasts u-m-b-lg">
            <Toast type="default" body="Default notification" />
            <Toast type="secondary" icon="checkmark" body="Default notification" />
            <Toast type="danger" body="Danger notification" />
          </div>
          <h3 className="site-subheadline">Playground</h3>
          <Playground codeText={toastExample} scope={toastScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
