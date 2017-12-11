import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Radio, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class RadioGroup extends React.Component {
  state = {
    selectedValue: '',
  };

  componentWillMount() {
    this.setState({
      selectedValue: this.props.selectedValue,
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedValue !== this.props.selectedValue) {
      this.setState({
        selectedValue: newProps.selectedValue,
      });
    }
  }

  handleChange = (value) => {
    this.setState({
      selectedValue: value,
    });
  };

  renderChildren = () => {
    const { blockGroup, children, name, inline } = this.props;
    const { selectedValue } = this.state;

    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === Radio) {
        const onChange = () => {
          if (child.props.value) {
            if (this.props.onChange && typeof (this.props.onChange === 'function')) {
              this.handleChange(child.props.value);
              this.props.onChange(child.props.name, child.props.value);
            } else {
              this.handleChange(child.props.value);
            }
          }
        };

        returnChild = React.cloneElement(child, {
          onChange,
          selectedValue,
          name,
        });
      } else {
        returnChild = child;
      }

      if (inline || blockGroup) {
        return returnChild;
      }

      return <UtilityListItem>{returnChild}</UtilityListItem>;
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
        <div className="form__block-group--radio">
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
    const showLabel = label && <label className="u-block">{label}</label>; // eslint-disable-line jsx-a11y/label-has-for

    return (
      <div className={classes}>
        {showLabel}
        {this.renderItems()}
      </div>
    );
  }
}

RadioGroup.displayName = 'RhinodioGroup';

RadioGroup.propTypes = {
  blockGroup: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioGroup;
