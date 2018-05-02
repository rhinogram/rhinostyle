import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

import Docs from './Docs';

const Live = (props) => {
  // Add `Fragment` to every scope by default
  const scopeProps = props.scope;
  scopeProps.Fragment = Fragment;

  return (
    <Fragment>
      <Docs component={props.component} propDescriptions={props.propDescriptions} />
      <LiveProvider
        scope={scopeProps}
        code={props.code}
        mountStylesheet={false}
        transformCode={input => Babel.transform(input, { presets: ['stage-0', 'react'] }).code}
      >
        <LiveEditor />
        <LivePreview />
        <LiveError />
      </LiveProvider>
    </Fragment>
  );
};

Live.propTypes = {
  component: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  propDescriptions: PropTypes.object,
};

export default Live;
