import s from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
    this.setState = prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.name.includes(this.state.filter)),
      };
    };
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const option = e.target.name;
    this.setState({ [option]: e.target.value });
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    return (
      <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>

        <h2 className={s.title}>Contacts</h2>
        <label className={s.filter}>
          Find contacts by name
          <input type="text" name="filter" value={filter} onChange={this.handleFilter} />
        </label>

        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => {
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
