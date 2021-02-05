/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import withSession, { WithSessionProps } from '../../../Hocs/with.session';
import { AUTH_SIGNIN } from '../../../utils/end.points';
import { httpClient } from '../../../utils/http-client';
import AuthInput from '../../common/AuthInput';
import Lnk from '../../common/Lnk';

interface LoginFormProps extends WithSessionProps {
  resetPass: () => void;
}

type TState = {
  email: string;
  pass: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ resetPass, saveUser }) => {
  const [state, setState] = useState<TState>({
    email: '',
    pass: '',
  });
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { email, pass } = state;

    httpClient
      .post(AUTH_SIGNIN, { login: email, password: pass })
      .then((res) => {
        const { data } = res;
        if (data.success) {
          saveUser(res.data.result);
          setTimeout(() => {
            window.location.reload();
          }, 200);
        } else if (data.success === false) setError('Invalid credetials!');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const { email, pass } = state;
  return (
    <div id="login_form">
      <form onSubmit={submit}>
        <div className="login-form-head">
          <h4>Sign In</h4>
          <p>Hello there, Sign in and start managing your Admin Template</p>
        </div>
        <div className="login-form-body">
          <div className="text-danger text-center">{error}</div>
          <div className="form-gp">
            <AuthInput
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => {
                const { value } = e.target;
                if (error) setError('');
                setState({ ...state, email: value });
              }}
            />
            <i className="ti-email" />
          </div>
          <div className="form-gp">
            <AuthInput
              label="Password"
              type="password"
              value={pass}
              onChange={(e) => {
                const { value } = e.target;
                if (error) setError('');
                setState({ ...state, pass: value });
              }}
            />
            <i className="ti-lock" />
          </div>
          <div className="row mb-4 rmber-area">
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input
                  className="custom-control-input"
                  id="customControlAutosizing"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div className="col-6 text-right">
              <Lnk onClick={resetPass}>Forgot Password?</Lnk>
            </div>
          </div>
          <div className="submit-btn-area">
            <button id="form_submit" type="submit">
              Submit
              <i className="ti-arrow-right" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withSession(LoginForm);
