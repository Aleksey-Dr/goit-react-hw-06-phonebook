import { useSelector } from 'react-redux';

import { useEffect } from 'react';

import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList';

export const App = () => {
  // const [oldContacts, setOldContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? date
  // });
  
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]
  );

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '420px',
        margin: '20px',
      }}
    >
      <h2>Phonebook</h2>

      <ContactForm />

      <h3>Contacts</h3>
      <Filter />

      <ContactList
        filterContacts={filterContacts}
      />
    </div>
  );
};
