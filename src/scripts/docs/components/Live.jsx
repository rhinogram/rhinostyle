import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { transform } from '@babel/core';

import Docs from './Docs';

const Live = (props) => {
  // Add `Fragment` to every scope by default
  const scopeProps = props.scope;
  scopeProps.Fragment = Fragment;

  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <Docs component={props.component} propDescriptions={props.propDescriptions} />
      <LiveProvider
        scope={scopeProps}
        code={props.code}
        mountStylesheet={false}
        transformCode={(input) =>
          transform(input, {
            plugins: [
              require('@babel/plugin-syntax-jsx'), // eslint-disable-line global-require
              [
                require('@babel/plugin-proposal-class-properties'), // eslint-disable-line global-require
                { loose: true },
              ],
            ],
          }).code}
      >
        <LiveEditor />
        <LivePreview />
        <LiveError />
      </LiveProvider>
    </Fragment>
  );
};

Live.propTypes = {
  component: PropTypes.func,
  code: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  propDescriptions: PropTypes.object,
};

export default Live;
