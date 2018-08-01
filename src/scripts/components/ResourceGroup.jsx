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
      if (!child) return null;

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
      'resource-group@small resource-group@xsmall': {
        maxWidth: 400,
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

ResourceGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  separator: PropTypes.string,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
};

export default ResourceGroup;
