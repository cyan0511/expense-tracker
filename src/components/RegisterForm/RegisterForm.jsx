import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { AuthForm } from '../AuthForm/AuthForm';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const fields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ];
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
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
       <AuthForm
        fields={fields}
        buttonText="Sign Up"
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Sign In"
        isLogin={false}
      />
    </div>
  );
};
