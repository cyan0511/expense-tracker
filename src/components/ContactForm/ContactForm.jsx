import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/contacts/selectors';
import { addContact, updateContact } from '../../store/contacts/operations';
import { Notify } from 'notiflix';

export const ContactForm = ({contact}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState(contact?.name);
  const [number, setNumber] = useState(contact?.number);

  const handleNameChange = e => {
    setName(toProperCase(e.target.value));
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    // prevent the form from refreshing when submitted
    e.preventDefault();

    // if name and number is empty, it will not submit(return)
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.some(
      c => c.name.toLowerCase() === name.toLowerCase()
      && (contact?.id ? c.id !== contact.id : true)
    );

    if (existingContact) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    if (contact?.id) {
      // update
      dispatch(updateContact({ id: contact.id, name, number }));

    } else {
      // new
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  const toProperCase = name => {
    return name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

    return (
      <div className={css['contact-form']}>
        <form  onSubmit={handleSubmit}>

        </form>
      </div>
    );
}
