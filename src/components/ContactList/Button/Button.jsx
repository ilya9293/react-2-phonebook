import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ deleteContact, id }) {
  return (
    <button type="button" className={s.btn} onClick={() => deleteContact(id)}>
      Delete
    </button>
  );
}

Button.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;
