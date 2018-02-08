import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ContainerQuery } from 'react-container-query';

import { Resource } from '../components';

class ResourceGroup extends React.Component {
  renderChildren = () => {
    let returnChild = null;
    const { children } = this.props;

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
    const { className, separator } = this.props;
    const containerQueryParams = {
      'resource-group@small': {
        maxWidth: 675,
      },
    };

    return (
      <div className="resource-group__container">
        { separator && <div className="resource-group__separator">{separator}</div> }
        <ContainerQuery query={containerQueryParams}>
          {params => (
            <div className={cx('resource-group', className, {
              ...params,
            })}
            >
              {this.renderChildren()}
            </div>
          )}
        </ContainerQuery>
      </div>
    );
  }
}

ResourceGroup.displayName = 'RhinoResourceGroup';

ResourceGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  separator: PropTypes.string,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
};

ResourceGroup.defaultProps = {
  className: '',
  interfaceMode: null,
};

export default ResourceGroup;
