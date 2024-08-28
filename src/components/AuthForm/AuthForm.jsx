import React, { useState } from 'react';
import iconSvg from '../../assets/images/icons.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logIn, register } from '../../redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import css from './AuthForm.module.css';
import { Link } from 'react-router-dom';

export const AuthForm = ({
                           fields,
                           buttonText,
                           footerText,
                           footerLink,
                           footerLinkText,
                           isLogin,
                         }) => {
  const { isRefreshing } = useAuth();
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [isValidPassword, setIsValidPassword] = useState(null);

  // Handle Password Validation
  const validatePassword = (e, field) => {
    if (field === 'password') {
      const isValid = e.target.value.length >= 8;
      setIsValidPassword(isValid);
      setError(null);
    }
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
    validatePassword(e, field);
  };

  // Handle Submit using Async
  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setIsValidPassword(null);

    if (!isValidPassword) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      if (isLogin) {
        await dispatch(logIn(formData)).unwrap();
      } else {
        await dispatch(register(formData)).unwrap();
      }
    } catch (err) {
      if (err.status === 409) {
        setError('Account already exists');
      } else if (err.status === 403) {
        setError('Email address does not exist or the password is incorrect');
      }
      clearPasswordField();
    }
  };

  const clearPasswordField = () => {
    setFormData(prevData => ({
      ...prevData,
      password: '',
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      {fields.map((field, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <input
            type={
              field.type === 'password' && showPassword
                ? 'text'
                : field.type
            }
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={e => handleChange(e, field.name)}
            id={field.name}
            required
          />
          {field.type === 'password' ?
            (<svg width="20" height="20" onClick={() => setShowPassword(val => !val)}>
              <use href={`${iconSvg}#eye${showPassword ? '' : '-off'}`} />
            </svg>) : null
          }
        </div>
      ))}


      <div>
        {isValidPassword !== null && !isLogin && (
          <p
            style={{ color: isValidPassword ? 'var(--mint-green)' : 'var(--red)' }}
          >
            {isValidPassword
              ? 'Password is secure'
              : 'Enter a valid Password'}
          </p>
        )}
        {error && (
          <p style={{ color: 'var(--red)' }}>{error}</p>
        )}
      </div>


      <div className={css.actionButtons} style={!isLogin ? { marginTop: '71px' } : null}>
        <button
          type="submit"
          className="primary-button"
          style={{ width: isRefreshing ? '170px' : null }}
        >
          {isRefreshing ?
            (isLogin ? 'Signing in...' : 'Signing up...') : buttonText}
        </button>

        <p>
          {footerText}{' '}
          <Link to={footerLink}>{footerLinkText}</Link>
        </p>
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  footerLink: PropTypes.string.isRequired,
  footerLinkText: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};
