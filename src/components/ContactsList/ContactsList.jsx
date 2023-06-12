import { List } from './ContactsList.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Contact from 'components/Contact/Contact';

export default function ContactsList() {
  const contacts = useSelector(getContacts);
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </List>
  );
}
