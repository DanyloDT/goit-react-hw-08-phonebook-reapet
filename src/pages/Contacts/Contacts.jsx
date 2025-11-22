import React, { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../../redux/selector';
import { ContactList } from '../../components/ContactList/ContactList';
import { selectIsLoggedIn } from '../../redux/Auth/authSelector';
import { fetchContactsThunk } from '../../redux/operations';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { Loader } from '../../components/Loader/Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    isLoggedIn && dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn]);

  return !isLoggedIn ? (
    <Loader size={40} />
  ) : (
    <div className="glass-card">
      <UserMenu />
      <h1 className="text-2xl text-center text-purple-300 mb-4">Phonebook</h1>
      <ContactForm />
      <h2 className="text-xl text-purple-300 mb-4">Contacts</h2>
      <Filter />
      {isLoading ? (
        <b className="text-neutral-400">Loading...</b>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
