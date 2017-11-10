import PropTypes from 'prop-types';
import React from 'react';

class ResourceColumnLeftIntro extends React.Component {
  componentDidMount() {
    // console.log();
  }

  render() {
    const { title } = this.props;

    return (
      <div className="resource__column-left__intro">
        {title}
      </div>
    );
  }
}

ResourceColumnLeftIntro.displayName = 'RhinoResourceColumnLeftIntro';

ResourceColumnLeftIntro.propTypes = {
  title: PropTypes.string,
};

ResourceColumnLeftIntro.defaultProps = {
  title: '',
};

export default ResourceColumnLeftIntro;
