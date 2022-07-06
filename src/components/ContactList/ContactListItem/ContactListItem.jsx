import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';

function ContactListItem({ name, number }) {
  return <p className={s.contact}>{`${name}: ${number}`}</p>;
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
