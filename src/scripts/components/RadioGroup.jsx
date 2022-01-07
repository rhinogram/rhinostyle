import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormLabel from './FormLabel';
import FormExplanationMessage from './FormExplanationMessage';
import FormValidationMessage from './FormValidationMessage';
import Radio from './Radio';
import SlidingRadio from './SlidingRadio';
import UtilityInlineGrid from './UtilityInlineGrid';
import UtilityList from './UtilityList';
import UtilityListItem from './UtilityListItem';

class RadioGroup extends React.Component {
  state = {
    selectedValue: '',
  };

  componentDidMount() {
    this.setState({
      selectedValue: this.props.selectedValue,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedValue !== this.props.selectedValue) {
      this.setState({
        selectedValue: this.props.selectedValue,
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
            if (this.props.onChange) {
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
      } else if (child.type === SlidingRadio) {
        const onChange = (value) => {
          if (this.props.onChange) {
            this.handleChange(value);
            this.props.onChange(value);
          } else {
            this.handleChange(value);
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

RadioGroup.propTypes = {
  blockGroup: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
};

export default RadioGroup;
