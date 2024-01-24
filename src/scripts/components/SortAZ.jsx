import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Button from './Button';

const SortAZ = ({ handleSort, sortDirection, className }) => {
  const disabledCaretClass = 'dropdown-caret--diabled ';

  const caretUpClass = sortDirection === 'asc' ? disabledCaretClass : ''; // ascending
  const caretDownClass = sortDirection === 'asc' ? '' : disabledCaretClass; // descending
  return (
    <Button type="reset" className={`u-text-xsmall u-flex u-p-a-small ${className || ''}`} onClick={handleSort}>
      <span className="u-flex u-flex-direction-column u-p-a-xsmall">
        <div className="u-text-tiny u-line-height-tiny ">A</div>
        <div className="u-text-tiny u-line-height-tiny ">Z</div>
      </span>
      <span className="u-flex u-flex-direction-column u-flex-justify-center">
        <Icon icon="caret-up" className={caretUpClass} size="small" />
        <Icon icon="caret-down" className={caretDownClass} size="small" />
      </span>
    </Button>
  );
};

SortAZ.propTypes = {
  handleSort: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SortAZ;
