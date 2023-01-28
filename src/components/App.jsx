import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/contact-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
      }}
    >
      <h1>Phonebook ☎</h1>
      <ContactForm />
      <ContactFilter />
      {(isLoading && !error && (
        <>
          <br />
          <b>Your request is in progress...🔃Please wait 🕰</b>
        </>
      )) || <ContactList />}
    </div>
  );
};
