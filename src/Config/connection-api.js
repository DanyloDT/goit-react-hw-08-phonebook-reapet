import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://64aeb805c85640541d4d97b7.mockapi.io',
  baseURL: 'https://connections-api.goit.global',
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const signup = async (user) => {
  const { data } = await instance.post('/users/signup', user);
  setToken(data.token);
  return data;
};

export const login = async (user) => {
  const { data } = await instance.post('/users/login', user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
};

export const currentUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async (contact) => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
