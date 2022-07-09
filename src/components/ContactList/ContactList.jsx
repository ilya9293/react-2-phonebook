import PropTypes from 'prop-types';
import Button from './Button';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList({ handleFilter, deleteContact }) {
  return (
    <ul className={s.list}>
      {handleFilter.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.listItem}>
            <ContactListItem name={name} number={number} />
            <Button deleteContact={deleteContact} id={id} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  handleFilter: PropTypes.array.isRequired,
};

export default ContactList;
