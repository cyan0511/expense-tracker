import { useDispatch } from 'react-redux';
import { register } from '../../store/auth/authOperations';
import css from './RegisterForm.module.css';
import { InputPassword } from '../InputPassword/InputPassword';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <h1>
        Sign Up
      </h1>
      <p>
        Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.
      </p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <InputPassword />
      </form>
      <div className={css.actionButtons}>
        <Link to="/login">
          <button className="primary-button" type="submit">Sign Up</button>
        </Link>
        <p>Already have account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};
