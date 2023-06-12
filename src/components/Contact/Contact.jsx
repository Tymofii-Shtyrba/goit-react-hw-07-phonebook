import React from 'react';
import { ListItem } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <span>{name}</span>
      <span>{phone}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
