
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

export const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dataSubmit = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    
    setContacts(prevState => ([...prevState, newContact]));
  }

  const changeFilter = event => {
    setFilter( event.currentTarget.value);
  }
  
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact=> contact.name.toLowerCase().includes(normalizedFilter));
 
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  return(
    <Container>
      <Section title="Phonebook"/>
      <ContactForm formSubmit={dataSubmit} />
      <Section title="Contacts"/>
      <Filter
        filter={filter}
        onChange={changeFilter}
      /> 
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </Container>
  );
};
