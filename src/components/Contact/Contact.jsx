import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <p>
        <b>{contact.name}</b>: {contact.number}
      </p>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </div>
  );
}