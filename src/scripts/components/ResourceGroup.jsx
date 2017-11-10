import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Resource } from '../components';

class ResourceGroup extends React.Component {
  componentDidMount() {
    //console.log('test');
  }

  renderChildren = () => {
    let returnChild = null;
    const children = this.props.children;

    return React.Children.map(children, (child) => {
      if (!child) return false;

      if (child.type === Resource) {
        returnChild = React.cloneElement(child, {
          interfaceMode: this.props.interfaceMode,
        });
      } else {
        returnChild = child;
      }

      return returnChild;
    });
  }

  render() {
    const { className } = this.props;
    const classes = cx('resource-group', className);

    return (
      <div className={classes}>
        {this.renderChildren()}
      </div>
    );
  }
}

ResourceGroup.displayName = 'Rhinodio';

ResourceGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
};

ResourceGroup.defaultProps = {
  className: '',
  interfaceMode: null,
};

export default ResourceGroup;
