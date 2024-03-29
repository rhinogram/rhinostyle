import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import FormExplanationMessage from './FormExplanationMessage';
import FormValidationMessage from './FormValidationMessage';
import UtilityInlineGrid from './UtilityInlineGrid';
import UtilityList from './UtilityList';
import UtilityListItem from './UtilityListItem';

class CheckboxGroup extends React.Component {
  renderChildren = () => {
    const { blockGroup, children, inline, unstyled } = this.props;

    return React.Children.map(children, (child) => {
      if (inline || blockGroup || unstyled) {
        return child;
      }

      return <UtilityListItem>{child}</UtilityListItem>;
    });
  };

  renderItems = () => {
    const { blockGroup, inline, unstyled } = this.props;

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
    } else if (unstyled) {
      return (
        <>
          {this.renderChildren()}
        </>
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
  unstyled: PropTypes.bool,
};

export default CheckboxGroup;
