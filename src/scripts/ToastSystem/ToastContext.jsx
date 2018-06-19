import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

export const ToastContext = React.createContext();

export class ToastProvider extends React.Component {
  state = {
    toasts: [],
  };

  render() {
    return (
      <ToastContext.Provider value={{
        state: this.state,
        addToast: (toast) => {
          const toastsClone = [...this.state.toasts];

          // Add UUID
          toast.uuid = `toast_${UtilitySystem.generateUUID()}`; // eslint-disable-line no-param-reassign

          toastsClone.unshift(toast);

          this.setState({
            toasts: toastsClone,
          });
        },
        removeToast: (id) => {
          const toastsClone = [...this.state.toasts];

          // Filter out matching toast ID
          const toasts = toastsClone.filter(toast => toast.uuid !== id);

          this.setState({
            toasts,
          });
        },
       }}
      >
        {this.props.children}
      </ToastContext.Provider>
    );
  }
}

ToastProvider.propTypes = {
  children: PropTypes.node,
};
