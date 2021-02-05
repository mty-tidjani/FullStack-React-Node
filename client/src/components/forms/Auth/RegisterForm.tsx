/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AUTH_SIGNUP } from '../../../utils/end.points';
import { emit, OPEN_LOGIN_MODAL } from '../../../utils/event.manager';
import { isEmail } from '../../../utils/helpers';
import { httpClient } from '../../../utils/http-client';
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
  pass?: boolean;
  pass2?: boolean;
};

const RegisterForm: React.FC = () => {
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
          // Todo
        } else if (data.success === false) {
          // check data.statusCode for possibilities
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
          <label htmlFor="exampleInputName1">Full Name</label>
          <input
            id="exampleInputName1"
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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            id="exampleInputEmail1"
            type="email"
            value={email}
            onChange={(e) => {
              const { value } = e.target;
              if (!value.trim() || !isEmail(value)) errors.email = true;
              else delete errors.email;
              setErrors(errors);
              setState({ ...state, email: value });
            }}
          />
          <i className="ti-email" />
          {errors.email && (
            <div className="text-danger">Please type a valid email</div>
          )}
        </div>
        <div className="form-gp">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            id="exampleInputPassword1"
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
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            id="exampleInputPassword2"
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

export default RegisterForm;
