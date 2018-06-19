import React from 'react';
import ReactDOM from 'react-dom';

import { Toast } from '../components';
import { ToastContext } from './ToastContext';

class ToastContainer extends React.Component {
  renderToast = (toast, context) => (
    <Toast
      key={toast.uuid}
      id={toast.uuid}
      ref={ref => (this.toast = ref)}
      type={toast.type}
      body={toast.body}
      onDismissed={() => context.removeToast(toast.uuid)}
      timeline
    />
  );

  render() {
    return (
      ReactDOM.createPortal( // eslint-disable-line function-paren-newline
        <ToastContext.Consumer>
          {context => (
            <div className="toasts-container">
              {context.state.toasts.map(toast => this.renderToast(toast, context))}
            </div>
          )}
        </ToastContext.Consumer>,
        document.body,
      ) // eslint-disable-line function-paren-newline
    );
  }
}

export default ToastContainer;
