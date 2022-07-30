import React, { useState, useEffect } from 'react';
import contactsUsers from '../data/contacts.json';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useRef } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsUsers
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactsItem = itemId => {
    setContacts(prev => prev.filter(({ id }) => id !== itemId));
  };
  const handleChangeInput = e => {
    setFilter(e.target.value);
  };

  const hendleUpdateContacts = data => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prev => [data, ...prev]);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={hendleUpdateContacts} />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} value={filter} />
      <ContactList
        list={contacts}
        serchName={filter}
        onDelete={deleteContactsItem}
      />
    </div>
  );
};
