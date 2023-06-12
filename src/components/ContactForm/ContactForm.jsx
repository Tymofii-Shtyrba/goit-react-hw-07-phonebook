import React from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    console.log(name, phone);
    dispatch(addContact({ name, phone }));
    event.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="text" name="phone" required />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
}
