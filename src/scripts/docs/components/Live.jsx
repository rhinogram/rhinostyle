import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

import Docs from './Docs';

const Live = props => (
  <Fragment>
    <Docs component={props.component} propDescriptions={props.propDescriptions} />
    <LiveProvider
      scope={props.scope}
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

Live.propTypes = {
  component: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  propDescriptions: PropTypes.object,
};

export default Live;
