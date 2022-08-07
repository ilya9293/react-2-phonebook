import s from './App.module.css';
// import { Component } from 'react';
import ContactForm from '../ContactForm';
import { nanoid } from 'nanoid';
import Filter from '../Filter';
import ContactList from '../ContactList';
import * as storage from '../../services/localStorage';
import { useState, useEffect } from 'react';

const CONTACTSLOCALE = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(storage.get(CONTACTSLOCALE) ?? []);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save(CONTACTSLOCALE, contacts);
  }, [contacts]);

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const handleFilter = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handleChange = e => setFilter(e.target.value);

  const handleSubmit = (name, number) => {
    const isName = contacts.some(contact => name.toLowerCase() === contact.name.toLowerCase());
    if (isName) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { name, number, id: nanoid() }]);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={s.title}>Contacts</h2>

      <Filter filter={filter} handleChange={handleChange} />
      {!!handleFilter().length && (
        <ContactList handleFilter={handleFilter()} deleteContact={deleteContact} />
      )}
    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     //  const parseData = JSON.parse(localStorage.getItem(CONTACTSLOCALE));
//     const parseData = storage.get(CONTACTSLOCALE);
//     if (parseData) {
//       this.setState({ contacts: storage.get(CONTACTSLOCALE) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const stateContacts = this.state.contacts;
//     if (prevState.contacts !== stateContacts) {
//       // localStorage.setItem(CONTACTSLOCALE, JSON.stringify(stateContacts));
//       storage.save(CONTACTSLOCALE, stateContacts);
//     }
//   }

//   deleteContact = id => {
//     const filteredContacts = this.state.contacts.filter(contact => contact.id !== id);
//     this.setState({ contacts: [...filteredContacts] });
//   };

//   handleFilter = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//   handleChange = e => {
//     const option = e.target.name;
//     this.setState({ [option]: e.target.value });
//   };

//   handleSubmit = (name, number) => {
//     const isName = this.state.contacts.some(
//       contact => name.toLowerCase() === contact.name.toLowerCase(),
//     );
//     if (isName) {
//       alert(`${name} is alredy in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { name, number, id: nanoid() }],
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.handleFilter();

//     return (
//       <div className={s.container}>
//         <h2 className={s.title}>Phonebook</h2>
//         <ContactForm handleSubmit={this.handleSubmit} />
//         <h2 className={s.title}>Contacts</h2>

//         <Filter filter={filter} handleChange={this.handleChange} />
//         {!!filteredContacts.length && (
//           <ContactList handleFilter={filteredContacts} deleteContact={this.deleteContact} />
//         )}
//       </div>
//     );
//   }
// }

export default App;
