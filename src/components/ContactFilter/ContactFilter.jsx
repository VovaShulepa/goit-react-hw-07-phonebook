import css from './ContactFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter/filterSlice';
import { selectContacts } from 'redux/contacts/contact-selectors';

export const ContactFilter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <div>
          <h2>Contacts 📑</h2>
          <label className={css.filterLabel}>Find contacts by name </label>
          <input
            className={css.filterName}
            type="text"
            name="filter"
            onChange={e => {
              const { value } = e.target;
              const action = filterContact(value);
              dispatch(action);
            }}
          />
        </div>
      )}
    </>
  );
};
