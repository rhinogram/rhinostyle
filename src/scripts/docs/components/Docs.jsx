import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { Label } from '../../components';

const propTypesArray = [{
  key: 'array',
  test: PropTypes.array,
  isRequired: PropTypes.array.isRequired,
}, {
  key: 'boolean',
  test: PropTypes.bool,
  isRequired: PropTypes.bool.isRequired,
}, {
  key: 'function',
  test: PropTypes.func,
  isRequired: PropTypes.func.isRequired,
}, {
  key: 'number',
  test: PropTypes.number,
  isRequired: PropTypes.number.isRequired,
}, {
  key: 'object',
  test: PropTypes.object,
  isRequired: PropTypes.array.isRequired,
}, {
  key: 'string',
  test: PropTypes.string,
  isRequired: PropTypes.string.isRequired,
}, {
  key: 'node',
  test: PropTypes.node,
  isRequired: PropTypes.node.isRequired,
}, {
  key: 'element',
  test: PropTypes.element,
  isRequired: PropTypes.element.isRequired,
}];

const getReactPropType = (propTypeFunc) => {
  let name = 'custom';
  let isRequired = false;

  propTypesArray.some((propType) => {
    if (propTypeFunc === propType.test) {
      name = propType.key;
      return true;
    }

    if (propTypeFunc === propType.isRequired) {
      name = propType.key;
      isRequired = true;
      return true;
    }

    return false;
  });

  return { name, isRequired };
};

const Docs = (props) => {
  const propTypes = [];
  const { component, propDescriptions } = props;

  Object.keys(component.propTypes).map(propName =>
    propTypes.push({
      propName,
      type: getReactPropType(component.propTypes[propName]),
      description: ReactHtmlParser(propDescriptions[propName]) || '',
    }));

  return (
    <table className="table rdocs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propTypes.map(propObj => (
          <tr key={propObj.propName}>
            <td className="u-textNoBreak">
              <span className="rdocs-cellLabel">{propObj.propName}</span> {propObj.type.isRequired && <Label type="danger" label="Required" />}
            </td>
            <td className="u-textNoBreak">
              <span className="rdocs-cellLabel">{propObj.type.name}</span>
            </td>
            <td>{propObj.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Docs.propTypes = {
  component: PropTypes.func,
  propDescriptions: PropTypes.object,
};

Docs.defaultProps = {
  propDescriptions: {},
};

export default Docs;