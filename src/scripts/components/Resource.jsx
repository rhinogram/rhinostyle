import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ResourceBottom from './ResourceBottom';
import ResourceRight from './ResourceRight';
import { UtilitySystem } from '../UtilitySystem';

class Resource extends React.Component {
  getChildren = () => {
    let returnChild = null;
    const { children } = this.props;

    return React.Children.map(children, (child) => {
      if (!child) return null;

      if (child.type === ResourceBottom) {
        returnChild = null;
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  getResourceBottomChildren = () => {
    let returnChild = null;
    const { children } = this.props;

    return React.Children.map(children, (child) => {
      if (!child) return null;

      if (child.type === ResourceBottom) {
        returnChild = child;
      } else {
        returnChild = null;
      }

      return returnChild;
    });
  }

  hasRightColumn = () => {
    const { children } = this.props;
    let rightColumnInstance = false;

    React.Children.map(children, (child) => {
      if (child && child.type === ResourceRight) {
        rightColumnInstance = true;
      }
    });

    return rightColumnInstance;
  }

  handleClick = () => {
    const { disabled, unavailable } = this.props;

    if (this.props.onClick && (!disabled && !unavailable)) {
      this.props.onClick();
    }
  }

  render() {
    const { className, active, disabled, selected, interfaceMode, unread, wrapperClassName, unavailable, dataCypress, interfaceLeft } = this.props;

    const interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';

    const wrapperClasses = cx('resource__wrapper', wrapperClassName, {
      [UtilitySystem.config.classes.active]: active && !interfaceMode,
      'is-unavailable': unavailable,
      'has-interface': interfaceMode && !unavailable,
      [`is-${interfaceClass}`]: interfaceMode,
      'is-selected': selected && !active,
      'is-unread': unread,
      'interface-left': interfaceLeft,
    });

    const resourceClasses = cx('resource', className, {
      'has-right-column': this.hasRightColumn(),
      'resource--is-unavailable': unavailable,
    });

    return (
      <div role="button" tabIndex={0} className={wrapperClasses} onClick={this.handleClick} disabled={disabled} data-cypress={dataCypress}>
        <div className={resourceClasses}>
          {this.getChildren()}
        </div>
        {this.getResourceBottomChildren()}
      </div>
    );
  }
}

Resource.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool, // disables resource button completely.
  unavailable: PropTypes.bool, // hides the checkbox/radio and voids the click function. Still adds muted text styles to Intro and Body.
  active: PropTypes.bool,
  selected: PropTypes.bool,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
  onClick: PropTypes.func,
  unread: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  dataCypress: PropTypes.string,
  interfaceLeft: PropTypes.bool,
};

export default Resource;
