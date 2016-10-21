import React              from 'react';
import cx                 from 'classnames';
import { Button, Icon }    from '../components';

class NavPagination extends React.Component {
  static displayName = 'RhinoNavPagination';

  static propTypes = {
    className:        React.PropTypes.string,
    infoPosition:     React.PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    infoPosition:    'left',
  };

  render() {
    const { className, infoPosition } = this.props;
    const classes = cx('nav-pagination', className, {
      'nav-pagination--info-right':     infoPosition === 'right',
    });
    return (
      <nav className={classes}>
        <div className="nav-pagination__list">
          <Button className="nav-pagination__list__item" iconOnly><Icon icon="chevron-left" /></Button>
          <Button className="nav-pagination__list__item" iconOnly><Icon icon="chevron-right" /></Button>
        </div>
        <div className="nav-pagination__info">
          <span className="nav-pagination__info__showing">1-50</span>&nbsp;of&nbsp;<span className="nav-pagination__info__total">1,632</span>
        </div>
      </nav>
    );
  }
}

export default NavPagination;
