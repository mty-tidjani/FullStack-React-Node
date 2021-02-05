/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import withSession, { WithSessionProps } from '../../../Hocs/with.session';
import { AUTH_SIGNUP } from '../../../utils/end.points';
import { emit, OPEN_LOGIN_MODAL } from '../../../utils/event.manager';
import { isEmail } from '../../../utils/helpers';
import { httpClient } from '../../../utils/http-client';
import AuthInput from '../../common/AuthInput';
import Lnk from '../../common/Lnk';

type TState = {
  name: string;
  email: string;
  pass: string;
  pass2: string;
};

type TErrors = {
  name?: boolean;
  email?: boolean;
  email2?: string;
  pass?: boolean;
  pass2?: boolean;
};

const RegisterForm: React.FC<WithSessionProps> = ({ saveUser }) => {
  const [errors, setErrors] = useState<TErrors>({});
  const [state, setState] = useState<TState>({
    name: '',
    email: '',
    pass: '',
    pass2: '',
  });

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) return;
    const { email, name, pass } = state;

    httpClient
      .post(AUTH_SIGNUP, { userName: name, email, password: pass })
      .then((res) => {
        const { data } = res;
        if (data.success) {
          saveUser(res.data.result);
          setTimeout(() => {
            window.location.reload();
          }, 200);
        } else if (data.success === false) {
          if (data.statusCode === 10) errors.email2 = 'Invalid email!';
          else if (data.statusCode === 11) errors.email2 = 'Email taken!';
          setErrors({ ...errors });
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const { email, name, pass, pass2 } = state;

  return (
    <form id="register_form" onSubmit={submit}>
      <div className="login-form-head">
        <h4>Sign up</h4>
        <p>Hello there, Sign up and Join with Us</p>
      </div>
      <div className="login-form-body">
        <div className="form-gp">
          <AuthInput
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => {
              const { value } = e.target;
              if (!value.trim()) errors.name = true;
              else delete errors.name;
              setErrors(errors);
              setState({ ...state, name: value });
            }}
          />
          <i className="ti-user" />
          {errors.name && (
            <div className="text-danger">Username is require.</div>
          )}
        </div>
        <div className="form-gp">
          <AuthInput
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => {
              const { value } = e.target;
              if (!value.trim() || !isEmail(value)) errors.email = true;
              else delete errors.email;
              if (errors.email2) delete errors.email2;
              setErrors(errors);
              setState({ ...state, email: value });
            }}
          />
          <i className="ti-email" />
          {errors.email && (
            <div className="text-danger">Please type a valid email</div>
          )}
          {errors.email2 && <div className="text-danger">{errors.email2}</div>}
        </div>
        <div className="form-gp">
          <AuthInput
            label="Password"
            type="password"
            value={pass}
            onChange={(e) => {
              const { value } = e.target;
              if (value.length < 6) errors.pass = true;
              else delete errors.pass;
              setErrors(errors);
              setState({ ...state, pass: value });
            }}
          />
          <i className="ti-lock" />
          {errors.pass && (
            <div className="text-danger">Password must have 6 chars min</div>
          )}
        </div>
        <div className="form-gp">
          <AuthInput
            label="Confirm Password"
            type="password"
            value={pass2}
            onChange={(e) => {
              const { value } = e.target;
              if (pass !== value) errors.pass2 = true;
              else delete errors.pass2;
              setErrors(errors);
              setState({ ...state, pass2: value });
            }}
          />
          <i className="ti-lock" />
          {errors.pass2 && (
            <div className="text-danger">Password must match</div>
          )}
        </div>
        <div className="submit-btn-area">
          <button id="form_submit" type="submit">
            Submit
            <i className="ti-arrow-right" />
          </button>
        </div>
        <div className="form-footer text-center mt-5">
          <p className="text-muted">
            Dont have an account?
            <Lnk onClick={() => emit(OPEN_LOGIN_MODAL)}>Sign in</Lnk>
          </p>
        </div>
      </div>
    </form>
  );
};

export default withSession(RegisterForm);
