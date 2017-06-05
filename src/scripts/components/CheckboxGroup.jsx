import cx    from 'classnames';
import React from 'react';

import { UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class CheckboxGroup extends React.Component {
  static displayName = 'CheckboxGroup';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    inline: React.PropTypes.bool,
    label: React.PropTypes.string,
  };

  renderChildren = () => {
    const { children, inline } = this.props;

    return React.Children.map(children, child =>
      (inline ? <div>{child}</div> : <UtilityListItem>{child}</UtilityListItem>),
    );
  };

  render() {
    const { className, inline, label } = this.props;
    const classes = cx('form__group', className);

    // Show label or not based on prop value
    const showLabel = label ? <label className="u-block">{label}</label> : null; // eslint-disable-line jsx-a11y/label-has-for

    // Wrap items in either `<UtilityInlineGrid>` or `<UtilityList>` based on prop
    const render = inline ?
      <UtilityInlineGrid>{this.renderChildren()}</UtilityInlineGrid>
      : <UtilityList space>{this.renderChildren()}</UtilityList>;

    return (
      <div className={classes}>
        {showLabel}
        {render}
      </div>
    );
  }
}

export default CheckboxGroup;
