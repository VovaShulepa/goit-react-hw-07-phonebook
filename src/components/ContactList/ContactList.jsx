import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  // if (!contacts) return;

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactListItem}>
              {name} : {number}
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => {
                  const action = deleteContact(id);
                  dispatch(action);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
