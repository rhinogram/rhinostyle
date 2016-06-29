import React from 'react';
import cx    from 'classnames';

class Radio extends React.Component {
  static displayName = 'Rhinodio';

  static propTypes = {
    children:      React.PropTypes.node,
    inline:        React.PropTypes.bool,
    name:          React.PropTypes.string,
    onChange:      React.PropTypes.func,
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    value:         React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  };

  static defaultProps = {
    inline: false,
    onChange() {
      return true;
    },
  };

  render() {
    const { inline, name, onChange, value } = this.props;
    const id = `${name}${Date.now()}`;
    const classes = cx('rhinodio', {
      'rhinodio--inline': inline,
    });

    return (
      <div className={classes}>
        <input type="radio" name={name} value={value} id={id} checked={this.props.value === this.props.selectedValue} onChange={onChange} />
        <label htmlFor={id}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Radio;
