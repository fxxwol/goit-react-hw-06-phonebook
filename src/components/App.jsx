import ContactForm from './ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter';
import { Container } from '@mui/material';
import { add, remove } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleSumbit = ({ name, number }) => {
    dispatch(add({ name, number }));
  };

  const handleDelete = id => {
    dispatch(remove(id));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSumbit} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => dispatch(change({ filterValue: e.target.value }))}
      />
      <ContactList contacts={filterContacts()} onDelete={handleDelete} />
    </Container>
  );
}

export default App;
