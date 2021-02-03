/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Lnk from '../../common/Lnk';

type LoginFormProps = {
  resetPass: () => void
}

const LoginForm:React.FC<LoginFormProps> = ({ resetPass }) => (
  <div id="login_form">
    <form onSubmit={(e) => {
      e.preventDefault();
    }}
    >
      <div className="login-form-head">
        <h4>Sign In</h4>
        <p>Hello there, Sign in and start managing your Admin Template</p>
      </div>
      <div className="login-form-body">
        <div className="form-gp">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input id="exampleInputEmail1" type="email" />
          <i className="ti-email" />
          <div className="text-danger" />
        </div>
        <div className="form-gp">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input id="exampleInputPassword1" type="password" />
          <i className="ti-lock" />
          <div className="text-danger" />
        </div>
        <div className="row mb-4 rmber-area">
          <div className="col-6">
            <div className="custom-control custom-checkbox mr-sm-2">
              <input className="custom-control-input" id="customControlAutosizing" type="checkbox" />
              <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>
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

export default LoginForm;
