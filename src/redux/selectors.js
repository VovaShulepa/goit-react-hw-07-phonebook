import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/contact-selectors';
import { selectFilter } from './filter/filter-selectors';

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
