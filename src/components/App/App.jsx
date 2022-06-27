import s from './App.module.css';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {};

  render() {
    return (
      <div className={s.container}>
        <h2 className={s.title}>Phonebook</h2>
        <form className={s.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>

        <h2 className={s.title}>Contacts</h2>
        <ul className={s.list}>
          <li>
            <p className={s.contact}>Posie Simoson</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
