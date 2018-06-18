import PropTypes from 'prop-types';
import React from 'react';

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

          toastsClone.push(toast);

          this.setState({
            toasts: toastsClone,
          });
        },
        removeToast: (id) => {
          console.log(id);
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
