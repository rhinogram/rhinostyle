import cx    from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Radio } from '../components';

class RadioGroup extends React.Component {
  static displayName = 'RhinodioGroup';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    selectedValue: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
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
    const { children, inline, name } = this.props;
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
          inline,
          name,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  };

  render() {
    const { className, label } = this.props;
    const classes = cx('form__group', className);

    const showLabel = () => {
      if (label) {
        return <label className="u-block">{label}</label>;
      }

      return false;
    };

    return (
      <div className={classes}>
        {showLabel()}
        {this.renderChildren()}
      </div>
    );
  }
}

export default RadioGroup;
