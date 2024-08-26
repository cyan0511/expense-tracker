import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/auth/authOperations';
import css from './LoginForm.module.css';
import { getAuthError } from '../../store/auth/authSelectors';
import { InputPassword } from '../InputPassword/InputPassword';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
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
      <form>
        <input type="email" placeholder="Email" />
        <InputPassword />
      </form>
      <div className={css.actionButtons}>
        <Link to="/login">
          <button className="primary-button" type="submit">Sign In</button>
        </Link>
        <p>Already have account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};
