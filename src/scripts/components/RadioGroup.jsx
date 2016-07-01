import React from 'react';
import cx    from 'classnames';

import Radio from './Radio';

class RadioGroup extends React.Component {
  static displayName = 'RhinodioGroup';

  static propTypes = {
    children:      React.PropTypes.node,
    className:     React.PropTypes.string,
    inline:        React.PropTypes.bool,
    label:         React.PropTypes.string,
    name:          React.PropTypes.string.isRequired,
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
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

  handleChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };

  renderChildren = () => {
    const { children, inline, name } = this.props;
    const { selectedValue } = this.state;

    let returnChild = null;

    return React.Children.map(children, (child) => {
      if (child.type === Radio) {
        returnChild = React.cloneElement(child, {
          onChange: this.handleChange,
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
