import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class CheckboxGroup extends React.Component {
  showValidationMessage = () => {
    const { validationMessage } = this.props;

    if (validationMessage) {
      return <div className="form__validation-message">{validationMessage}</div>;
    }

    return false;
  };

  showLabel = () => {
    const { label, required } = this.props;

    if (label) {
      return (
        <label // eslint-disable-line jsx-a11y/label-has-for
          className="u-block"
        >
          {label} {required && <span className="form__asterisk">*</span>}
        </label>
      );
    }

    return false;
  };

  renderChildren = () => {
    const { blockGroup, children, inline } = this.props;

    return React.Children.map(children, (child) => {
      if (inline || blockGroup) {
        return child;
      }

      return <UtilityListItem>{child}</UtilityListItem>;
    });
  };

  renderItems = () => {
    const { blockGroup, inline } = this.props;

    if (inline) {
      return (
        <UtilityInlineGrid size="regular">
          {this.renderChildren()}
        </UtilityInlineGrid>
      );
    } else if (blockGroup) {
      return (
        <div className="form__block-group--checkbox">
          {this.renderChildren()}
        </div>
      );
    }

    return (
      <UtilityList space className="u-m-a-0">
        {this.renderChildren()}
      </UtilityList>
    );
  }

  render() {
    const { className } = this.props;
    const classes = cx('form__group', className);

    return (
      <div className={classes}>
        {this.showLabel()}
        {this.renderItems()}
        {this.showValidationMessage()}
      </div>
    );
  }
}

CheckboxGroup.displayName = 'CheckboxGroup';

CheckboxGroup.propTypes = {
  blockGroup: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default CheckboxGroup;
