import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';
import { getAuthError } from '../../redux/auth/authSelectors';
import { AuthForm } from '../AuthForm/AuthForm';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  const fields = [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  /* useEffect(() => {
    if (error) {
      Notify.failure('Login failed.');
    }
  }, [error]); */

  return (
    <div className={css.container}>
      <h1>
        Sign In
      </h1>
      <p>
        Welcome back to effortless expense tracking! Your financial dashboard awaits..
      </p>

      <AuthForm
        fields={fields}
        buttonText="Sign In"
        footerText="Don't have an account?"
        footerLink="/signup"
        footerLinkText="Sign Up"
        isLogin={true}
      />

    </div>
  );
};
