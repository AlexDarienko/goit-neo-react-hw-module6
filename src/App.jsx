import React from 'react';
import ContactsForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1 className="app">Phonebook</h1>
      <ContactsForm />
      <h2 className="app">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}