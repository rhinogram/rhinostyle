import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, FormExplanationMessage, FormValidationMessage, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class CheckboxGroup extends React.Component {
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
    const { className, explanationMessage, label, required, validationMessage } = this.props;
    const classes = cx('form__group', className);

    return (
      <div className={classes}>
        <FormLabel required={required} id="">{label}</FormLabel>
        {this.renderItems()}
        <FormValidationMessage validationMessage={validationMessage} />
        <FormExplanationMessage explanationMessage={explanationMessage} />
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  blockGroup: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

export default CheckboxGroup;
