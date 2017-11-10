import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ContainerQuery } from 'react-container-query';

import { Resource, UtilitySystem } from '../components';

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
    const containerQueryParams = {
      'resource-group@small': {
        maxWidth: parseInt(UtilitySystem.config.breakpoints.smallMax, 10),
      },
    };

    return (
      <ContainerQuery query={containerQueryParams}>
        {params => (
          <div className={cx('resource-group', className, params)}>
            {this.renderChildren()}
          </div>
        )}
      </ContainerQuery>
    );
  }
}

ResourceGroup.displayName = 'RhinoResourceGroup';

ResourceGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
};

ResourceGroup.defaultProps = {
  className: '',
  interfaceMode: null,
};

export default ResourceGroup;
