import { useDispatch, useSelector } from 'react-redux';
import { selectIsRegistered } from '../../redux/Auth/authSelector';
import { Input } from '../../components/Input/Input';
import { loginThunk, signupThunk } from '../../redux/Auth/authOperations';
import { setIsRegistered } from '../../redux/Auth/authSlice';

export const Authorization = () => {
  const isRegistered = useSelector(selectIsRegistered);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = form.elements;

    const payload = {
      email: email.value,
      password: password.value,
      ...(!isRegistered && { name: name.value }),
    };

    const action = isRegistered ? loginThunk : signupThunk;
    dispatch(action(payload));

    form.reset();
  };

  return (
    <>
      <h1
        className="text-6xl text-center text-purple-300 mb-12 uppercase tracking-widest underline"
        aria-label="Phonebook application title"
      >
        Phonebook
      </h1>
      <form
        className="glass-card space-y-3"
        onSubmit={onSubmit}
        aria-labelledby="auth-title"
      >
        <h2
          className="text-xl text-center text-purple-300 mb-4 uppercase tracking-widest"
          id="auth-title"
        >
          {!isRegistered ? 'Register' : 'Login'}
        </h2>
        {!isRegistered ? (
          <>
            <Input
              key="reg-name"
              id="reg-name"
              label="Full name"
              className="neon-input focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
            <Input
              key="reg-email"
              id="reg-email"
              label="Email address"
              className="neon-input focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <Input
              key="reg-password"
              id="reg-password"
              label="Password"
              className="neon-input focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              required
            />
            <div className="flex gap-1 w-full justify-center items-center mb-8">
              <h2 className="text-sm">If you have already got an account,</h2>
              <button
                type="button"
                role="link"
                aria-label="Go to login form"
                className="text-purple-300 text-sm underline cursor-pointer"
                onClick={() => dispatch(setIsRegistered(true))}
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            <Input
              key="login-email"
              id="login-email"
              label="Email address"
              className="neon-input focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <Input
              key="login-password"
              id="login-password"
              label="Password"
              className="neon-input focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <div className="flex gap-1 w-full justify-center items-center mb-8">
              {' '}
              <h2 className="text-sm">
                If you don't have account yet, you can simply
              </h2>
              <button
                type="button"
                role="link"
                aria-label="Go to registration form"
                className="text-purple-300 text-sm underline cursor-pointer"
                onClick={() => dispatch(setIsRegistered(false))}
              >
                Register
              </button>
            </div>
          </>
        )}
        <button
          type="submit"
          aria-label={!isRegistered ? 'Submit registration' : 'Submit login'}
          className="neon-button "
        >
          {!isRegistered ? 'Register' : 'Login'}
        </button>
      </form>
    </>
  );
};
