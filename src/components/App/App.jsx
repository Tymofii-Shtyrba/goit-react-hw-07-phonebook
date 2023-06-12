import Filter from 'components/Filter/Filter';
import { Phonebook } from './App.styled';
import Form from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <Phonebook>
      <Form />
      <Filter />
      <ContactsList />
    </Phonebook>
  );
};
