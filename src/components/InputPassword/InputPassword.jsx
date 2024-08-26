import iconSvg from '../../assets/images/icons.svg';
import css from './InputPassword.module.css';
import { useState } from 'react';

export const InputPassword = ({className}) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(`${iconSvg}#eye${showPassword ? '' : '-off'}}`);
  return (
    <div className={css.container}>

      <svg width="20" height="20" onClick={() => setShowPassword(val => !val)}>
        <use href={`${iconSvg}#eye${showPassword ? '' : '-off'}`} />
      </svg>
      <input className={className} type={showPassword ? 'text' : 'password'} placeholder="Password" required />
    </div>
  );
};
