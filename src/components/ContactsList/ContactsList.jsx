import { List } from './ContactsList.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getErrorStatus, getLoadingStatus } from 'redux/selectors';
import Contact from 'components/Contact/Contact';
import { BeatLoader } from 'react-spinners';

export default function ContactsList() {
  const isLoading = useSelector(getLoadingStatus);
  const error = useSelector(getErrorStatus);
  const contacts = useSelector(getContacts);
  return (
    <>
      <List>
        {contacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </List>
      {isLoading && <BeatLoader />}
      {error}
    </>
  );
}
