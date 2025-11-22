import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selector';
import { addContactThunk } from '../../redux/operations';
import { Input } from '../Input/Input';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form.elements;
    const nameValue = name.value;
    const numberValue = number.value;

    const findName = contacts.find(
      (elem) => elem.name.toLowerCase() === nameValue.toLowerCase()
    );
    if (findName) {
      alert(`${nameValue} is already in contacts.`);
      return;
    }

    dispatch(addContactThunk({ name: nameValue, number: numberValue }));
    form.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby="contact-form-title"
      className={`glass-card space-y-3 mb-6`}
    >
      <h2 id="contact-form-title" className="sr-only">
        Add new contact
      </h2>

      <Input
        id="contact-name"
        className="neon-input"
        type="text"
        name="name"
        required
      />

      <Input
        id="contact-number"
        className="neon-input"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}[\s]?[\-]?\(?\d{1,3}?\)?[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,9}"
        error="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button
        type="submit"
        className="neon-button"
        aria-label="Add new contact"
      >
        Add
      </button>
    </form>
  );
};
