import Playground from 'component-playground';
import React      from 'react';
import ReactDOM   from 'react-dom';

import { Alert, Button, Checkbox, Icon, NotificationActions, SystemAlert, Toast } from '../components';
import alertExample from './examples/Alert.example.txt';
import toastExample from './examples/Toast.example.txt';
import systemAlertExample from './examples/SystemAlert.example.txt';

const alertDocs = {
  className: '[Optional] - Include additional class name(s)',
  onDismiss: '[Optional] - Include dismiss function',
  size: '[Optional] - Alert size -  [small]',
  title: '[Required] - Alert title text',
  titleIcon: '[Optional] - Alert title icon',
  type: '[Optional] - Alert type, as a string -  [danger | default | info | success ]',
};
const alertScope = {
  React,
  ReactDOM,
  Alert,
  Button,
  Checkbox,
  Icon,
};

const toastDocs = {
  body: '[Required] - Toast body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - Toast type, as a string -  [danger | default | success]',
};
const toastScope = {
  React,
  ReactDOM,
  Toast,
  Icon,
};

const systemAlertDocs = {
  body: '[Required] - SystemAlert body text',
  className: '[Optional] - Include additional class name(s)',
  icon: '[Optional] - Include icon name',
  onDismiss: '[Required] - Include dismiss function',
  type: '[Optional] - SystemAlert type, as a string -  [danger | default | info | success]',
  url: '[Optional] - SystemAlert url, as a string',
  urlText: '[Optional] - SystemAlert urlText, as a string - defaults to "More Information"',
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

  /* eslint-disable no-alert */
  render() {
    return (
      <div>
        <section className="site-section">
          <h3 className="site-subheadline">Feedback</h3>
          <p className="site-text-lead">Numberous components make up our feedback system: Alert, SystemAlert, and Toast.</p>
        </section>

        <section className="site-section">
          <h3 className="site-subheadline">Alert</h3>
          <div className="u-m-b-large">
            <Alert title="This is a danger alert!" titleIcon="star" type="danger" onDismiss={() => alert('dismissed!')}>This is a danger alert for dangerous stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
            <Alert title="This is a defualt  alert!" titleIcon="star" onDismiss={() => alert('dismissed!')}>This is a default alert for defualt stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
            <Alert title="This is a info alert!" titleIcon="star" type="info" onDismiss={() => alert('dismissed!')}>This is a info alert for info stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
            <Alert title="This is a success alert!" titleIcon="star" type="success" onDismiss={() => alert('dismissed!')}>This is a success alert for success stuff. <a href="">text link</a> | <a href="">text link</a></Alert>
            <Alert title="This is a small info alert!" titleIcon="star" type="info" size="small" onDismiss={() => alert('dismissed!')} />
          </div>
          <h3 className="site-subheadline">Alert Playground</h3>
          <Playground theme="default" docClass={Alert} propDescriptionMap={alertDocs} codeText={alertExample} scope={alertScope} noRender={false} />
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
          <Playground theme="default" docClass={SystemAlert} propDescriptionMap={systemAlertDocs} codeText={systemAlertExample} scope={systemAlertScope} noRender={false} />
        </section>
        <section className="site-section">
          <h3 className="site-subheadline">Toast</h3>
          <p className="site-copy">To see a toast in action, <a href="javascript:void(0)" onClick={this.onClick}>click here</a>.</p>
          <div className="site-example-toasts u-m-b-large">
            <Toast type="default" body="Default toast notification" />
            <Toast type="success" icon="checkmark" body="Success toast notification" />
            <Toast type="danger" body="Danger toast notification" />
          </div>
          <h3 className="site-subheadline">Toast Playground</h3>
          <Playground theme="default" docClass={Toast} propDescriptionMap={toastDocs} codeText={toastExample} scope={toastScope} noRender={false} />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<FeedbackApp />, document.getElementById('js-app'));
