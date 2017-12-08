import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

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
      <UtilityList space>
        {this.renderChildren()}
      </UtilityList>
    );
  }

  render() {
    const { className, label } = this.props;
    const classes = cx('form__group', className);

    // Show label or not based on prop value
    const showLabel = label ? <label className="u-block">{label}</label> : null; // eslint-disable-line jsx-a11y/label-has-for

    return (
      <div className={classes}>
        {showLabel}
        {this.renderItems()}
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
};

export default CheckboxGroup;
