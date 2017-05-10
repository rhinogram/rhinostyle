import cx    from 'classnames';
import React from 'react';

import { Radio, UtilityInlineGrid, UtilityList, UtilityListItem } from '../components';

class RadioGroup extends React.Component {
  static displayName = 'RhinodioGroup';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    inline: React.PropTypes.bool,
    label: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    space: React.PropTypes.bool,
  };

  static defaultProps = {
    name: `rhinodioGroup-${Math.floor(Math.random() * 1000000)}`,
  };

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
    const { children, name, space } = this.props;
    const { selectedValue } = this.state;

    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === Radio) {
        const onChange = () => {
          if (child.props.value) {
            if (this.props.onChange && typeof (this.props.onChange === 'function')) {
              this.handleChange(child.props.value);
              this.props.onChange(child.props.value);
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

      return space ? <UtilityListItem>{returnChild}</UtilityListItem> : returnChild;
    });
  };

  render() {
    const { className, inline, label, space } = this.props;
    const classes = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label className="u-block">{label}</label>; // eslint-disable-line jsx-a11y/label-has-for
      }

      return false;
    };

    const render = () => {
      if (inline) {
        return (
          <UtilityInlineGrid>{this.renderChildren()}</UtilityInlineGrid>
        );
      } else if (space) {
        return (
          <UtilityList space>{this.renderChildren()}</UtilityList>
        );
      }

      // Default
      return this.renderChildren();
    };

    return (
      <div className={classes}>
        {showLabel()}
        {render()}
      </div>
    );
  }
}

export default RadioGroup;
