import PropTypes from 'prop-types';

import ContactsItem from '../contactsItem';

const ContactList = ({ filterContacts }) => {
  return (
    <div>
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
