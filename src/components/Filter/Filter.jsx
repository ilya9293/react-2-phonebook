import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, handleChange }) {
  return (
    <label className={s.filter}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
