import React    from 'react';
import ReactDOM from 'react-dom';

import { Alert, Icon, NotificationActions, SystemAlert, Toast } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const alertExample = require('raw!./examples/Alert.example.txt');
const alertDocs = {
  className: '[Optional] - Include additional class name(s)',
  dismissible: '[Optional] - Include close button used to dismiss alert',
  onDismiss: '[Optional] - Include dismiss function',
  title: '[Required] - Alert title text',
  titleIcon: '[Optional] - Alert title icon',
  type: '[Optional] - Alert type, as a string -  [danger | default | info | success | warning]',
};
const toastExample = require('raw!./examples/Toast.example.txt');
const toastDocs = {
  body: '[Required] - Toast body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - Callout type, as a string -  [danger | default | secondary]',
};
const systemAlertExample = require('raw!./examples/SystemAlert.example.txt');
const systemAlertDocs = {
  body: '[Required] - SystemAlert body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - SystemAlert type, as a string -  [danger | default | info | success]',
  url: '[Optional] - SystemAlert url, as a string',
};

const alertScope = {
  React,
  ReactDOM,
  Alert,
};
const toastScope = {
  React,
  ReactDOM,
  Toast,
  Icon,
};
const systemAlertScope = {
  React,
  ReactDOM,
  SystemAlert,
  Icon,
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
          <h3 className="site-subheadline">Feedback</h3>
          <p className="site-text-lead">Numberous components make up our feedback system: Alert, SystemAlert, and Toast.</p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Alert</h3>
          <div className="u-m-b-lg">
            <div className="site-example-alerts">
              <Alert title="This is a default alert!">This is a default alert for random stuff.</Alert>
            </div>
          </div>
          <h3 className="site-subheadline">Alert Playground</h3>
          <Playground docClass={Alert} propDescriptionMap={alertDocs} codeText={alertExample} scope={alertScope} noRender={false} />
        </section>
        <section className="site-section">
          <h3 className="site-subheadline">SystemAlert</h3>
          <div className="u-m-b-lg">
            <div className="site-example-systemalerts">
              <SystemAlert type="danger" body="Danger System Alert" />
              <SystemAlert type="default" body="Default System Alert" />
              <SystemAlert type="info" body="Info System Alert" />
              <SystemAlert type="success" body="Success System Alert" />
            </div>
          </div>
          <h3 className="site-subheadline">SystemAlert Playground</h3>
          <Playground docClass={SystemAlert} propDescriptionMap={systemAlertDocs} codeText={systemAlertExample} scope={systemAlertScope} noRender={false} />
        </section>
        <section>
          <h3 className="site-subheadline">Toast</h3>
          <p className="site-copy">To see a toast in action, <a href="#" onClick={this.onClick}>click here</a>.</p>
          <div className="site-example-toasts u-m-b-lg">
            <Toast type="default" body="Default notification" />
            <Toast type="secondary" icon="checkmark" body="Default notification" />
            <Toast type="danger" body="Danger notification" />
          </div>
          <h3 className="site-subheadline">Toast Playground</h3>
          <Playground docClass={Toast} propDescriptionMap={toastDocs} codeText={toastExample} scope={toastScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
