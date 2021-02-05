/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { strRandom } from '../../utils/helpers';

type AuthInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  label: string;
};

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  onChange,
  type,
  value,
}) => {
  const id = strRandom(4);

  return (
    <>
      <label className={value ? 'focused' : ''} htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

export default AuthInput;
