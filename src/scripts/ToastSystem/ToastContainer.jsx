import React from 'react';
import ReactDOM from 'react-dom';

import { Toast } from '../components';
import { ToastContext } from './ToastContext';

class ToastContainer extends React.Component {
  hideNotification = () => {
    console.log('hello');
  }

  renderToast = toast => (
    <Toast
      key={toast.uuid}
      ref={ref => (this.toast = ref)}
      type={toast.type}
      body={toast.body}
      onDismiss={this.hideNotification}
    />
  );

  render() {
    return (
      ReactDOM.createPortal( // eslint-disable-line function-paren-newline
        <ToastContext.Consumer>
          {context => (
            <div className="toasts-container">
              {context.state.toasts.map(this.renderToast)}
            </div>
          )}
        </ToastContext.Consumer>,
        document.body,
      ) // eslint-disable-line function-paren-newline
    );
  }
}

export default ToastContainer;
