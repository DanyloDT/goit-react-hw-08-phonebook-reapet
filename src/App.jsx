import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Contacts } from './pages/Contacts/Contacts';
import { Authorization } from './pages/Authorization/Authorization';
import { selectRefresh } from './redux/Auth/authSelector';
import { Layout } from './components/Layout/Layout';
import { currentUserThunk } from './redux/Auth/authOperations';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute ';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader size={40} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="authorization"
          element={
            <PublicRoute>
              <Authorization />
            </PublicRoute>
          }
        />

        <Route path="*" element={<h1 className="">Page is not Found ...</h1>} />
      </Route>
    </Routes>
  );
};
