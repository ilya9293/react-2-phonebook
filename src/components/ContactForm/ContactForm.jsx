import s from './ContactForm.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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
    const { name, number } = this.state;
    return (
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
    );
  }
}

export default ContactForm;
