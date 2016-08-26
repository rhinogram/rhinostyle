import React from 'react';
import cx    from 'classnames';

const Radio = (props) => {
  const { className, inline, name, onChange, value } = props;
  const id = `${name}-${Math.floor(Math.random() * 1000000)}`;
  const classes = cx('rhinodio', className, {
    'rhinodio--inline': inline,
  });

  return (
    <div className={classes}>
      <input type="radio" name={name} value={value} id={id} checked={props.value === props.selectedValue} onChange={onChange} />
      <label htmlFor={id}>
        {props.children}
      </label>
    </div>
  );
};

Radio.displayName = 'Rhinodio';

Radio.propTypes = {
  children:      React.PropTypes.node,
  className:     React.PropTypes.string,
  inline:        React.PropTypes.bool,
  name:          React.PropTypes.string,
  onChange:      React.PropTypes.func,
  selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  value:         React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
};

Radio.defaultProps = {
  inline: false,
  onChange() {
    return true;
  },
};

export default Radio;
