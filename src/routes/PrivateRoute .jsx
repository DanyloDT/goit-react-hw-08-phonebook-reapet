import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/Auth/authSelector';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();

  return !isLoggedIn ? (
    <Navigate to="/authorization" state={{ from: location }} />
  ) : (
    <>{children}</>
  );
};

export default PrivateRoute;
