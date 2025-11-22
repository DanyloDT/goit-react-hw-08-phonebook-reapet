import { useDispatch, useSelector } from 'react-redux';

import { selectFilterContacts } from '../../redux/selector';
import { deleteContactThunk } from '../../redux/operations';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  return (
    <ul className="space-y-2" aria-label="Contact list">
      {filterContacts.length === 0 ? (
        <li className="text-neutral-400" role="status" aria-live="polite">
          No contacts
        </li>
      ) : (
        <>
          {filterContacts.map(({ id, name, number }) => (
            <li
              key={id}
              className="flex justify-between items-center p-3 bg-black/30 rounded-xl border border-white/5"
              role="listitem"
              aria-label={`Contact ${name}`}
            >
              <div className="flex justify-center items-center gap-2">
                <p className="font-medium">{name}: </p>
                <p className="text-gray-400">{number}</p>
              </div>

              <button
                className="text-red-400 hover:text-red-500 text-sm cursor-pointer"
                type="button"
                aria-label={`Delete contact ${name}`}
                onClick={() => dispatch(deleteContactThunk(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
