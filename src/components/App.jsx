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
        background:
          'linear-gradient(180deg, rgb(238, 254, 183) 19.1%, rgb(169, 254, 222) 53.9%, rgb(90, 222, 255) 92%)',
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
