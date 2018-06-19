import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Alert, Button, Checkbox, Icon, SystemAlert, Toast, ToastContainer } from '../components';
import { Live } from './components';
import AlertExample from './examples/Alert.example.txt';
import ToastExample from './examples/Toast.example.txt';
import SystemAlertExample from './examples/SystemAlert.example.txt';

import { ToastContext, ToastProvider } from '../ToastSystem/ToastContext';

const AlertDocs = {
  onDismiss: 'Called when dimissed',
  type: "<code>oneOf(['danger', 'default', 'info', 'success'])</code>", // eslint-disable-line single-quotes
};
const AlertScope = {
  React,
  ReactDOM,
  Alert,
  Button,
  Checkbox,
  Icon,
};

const ToastDocs = {
  onDismiss: 'Called when dismissed',
  type: "<code>oneOf(['danger', 'default', 'success'])</code>", // eslint-disable-line single-quotes
};
const ToastScope = {
  React,
  ReactDOM,
  Toast,
  Icon,
};

const SystemAlertDocs = {
  onDismiss: 'Called when dismissed',
  type: "<code>oneOf(['danger', 'default', 'info', 'success'])</code>", // eslint-disable-line single-quotes
  urlText: 'Defaults to "More Information"',
};
const SystemAlertScope = {
  React,
  ReactDOM,
  SystemAlert,
  Icon,
};

class FeedbackApp extends React.Component {
  /*onClick = () => {
    NotificationActions.addNotification({
      body: 'This is an alert in a toast notification',
      icon: 'warning',
      type: 'danger',
      onDismiss() {
        console.log('I run when the notification was dismissed');
      },
    });
  }*/

  handleAddToastClick = (consumer) => {
    consumer.addToast({
      body: `${Date.now()} This is an alert in a toast notification`,
      icon: 'warning',
      type: 'danger',
    });
  }

  /* eslint-disable no-alert */
  render() {
    return (
      <ToastProvider>
        <ToastContext.Consumer>
          {consumer => (
            <Fragment>
              <ToastContainer />
              <section className="site-section">
                <h3 className="site-subheadline">Feedback</h3>
                <p className="site-text-lead">Numberous components make up our feedback system: Alert, SystemAlert, and Toast.</p>
              </section>

              <section className="site-section">
                <h3 className="site-subheadline">Alert</h3>
                <div className="u-m-b-large">
                  <Alert title="This is a danger alert!" titleIcon="star" type="danger" onDismiss={() => alert('dismissed!')}>This is a danger alert for dangerous stuff. <a href="https://www.rhinogram.com">rhinogram.com</a> | <a href="https://www.rhinogram.com">rhinogram.com</a></Alert>
                  <Alert title="This is a defualt  alert!" titleIcon="star" onDismiss={() => alert('dismissed!')}>This is a default alert for defualt stuff. <a href="https://www.rhinogram.com">rhinogram.com</a> | <a href="https://www.rhinogram.com">rhinogram.com</a></Alert>
                  <Alert title="This is a info alert!" titleIcon="star" type="info" onDismiss={() => alert('dismissed!')}>This is a info alert for info stuff. <a href="https://www.rhinogram.com">rhinogram.com</a> | <a href="https://www.rhinogram.com">rhinogram.com</a></Alert>
                  <Alert title="This is a success alert!" titleIcon="star" type="success" onDismiss={() => alert('dismissed!')}>This is a success alert for success stuff. <a href="https://www.rhinogram.com">rhinogram.com</a> | <a href="https://www.rhinogram.com">rhinogram.com</a></Alert>
                </div>
                <h3 className="site-subheadline">Alert Playground</h3>

                <Live
                  code={AlertExample}
                  scope={AlertScope}
                  component={Alert}
                  propDescriptions={AlertDocs}
                />
              </section>
              <section className="site-section">
                <h3 className="site-subheadline">SystemAlert</h3>
                <div className="u-m-b-large">
                  <div className="site-example-systemalerts">
                    <SystemAlert type="danger" body="Danger System Alert" />
                    <SystemAlert type="default" body="Default System Alert" />
                    <SystemAlert type="info" body="Info System Alert" />
                    <SystemAlert type="success" body="Success System Alert" />
                  </div>
                </div>
                <h3 className="site-subheadline">SystemAlert Playground</h3>

                <Live
                  code={SystemAlertExample}
                  scope={SystemAlertScope}
                  component={SystemAlert}
                  propDescriptions={SystemAlertDocs}
                />
              </section>
              <section className="site-section">
                <h3 className="site-subheadline">Toast</h3>
                <p className="site-copy">To see a toast in action, <Button reset className="u-text-primary" onClick={() => this.handleAddToastClick(consumer)}>click here</Button>.</p>
                <div className="site-example-toasts u-m-b-large">
                  <Toast type="default" body="Default toast notification" />
                  <Toast type="success" body="Success toast notification" />
                  <Toast type="danger" body="Danger toast notification" />
                </div>
                <h3 className="site-subheadline">Toast Playground</h3>

                <Live
                  code={ToastExample}
                  scope={ToastScope}
                  component={Toast}
                  propDescriptions={ToastDocs}
                />
              </section>
            </Fragment>
          )}
        </ToastContext.Consumer>
      </ToastProvider>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('root'));
