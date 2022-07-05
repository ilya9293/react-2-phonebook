import s from './App.module.css';
import { Component } from 'react';
import ContactForm from '../ContactForm';
import { nanoid } from 'nanoid';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleChange = e => {
    const option = e.target.name;
    this.setState({ [option]: e.target.value });
  };

  handleSubmit = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={s.title}>Contacts</h2>

        <Filter filter={filter} handleChange={this.handleChange} />

        <ul className={s.list}>
          {this.handleFilter().map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p className={s.contact}>{`${name}: ${number}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
