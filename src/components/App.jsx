import ContactForm from './ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter';
import { Container } from '@mui/material';
import { add, remove } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSumbit = ({ name, number }) => {
    dispatch(add({ name, number }));
  };

  const handleDelete = id => {
    dispatch(remove(id))
  }

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleSumbit} />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </Container>
  );
}

export default App;


// const [filter, setFilter] = useState('');
// const changeFilter = e => {
//   setFilter(e.target.value);
// };

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
