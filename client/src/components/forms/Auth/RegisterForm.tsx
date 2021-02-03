/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { emit, OPEN_LOGIN_MODAL } from '../../../utils/event.manager';
import Lnk from '../../common/Lnk';

const RegisterForm:React.FC = () => (
  <form id="register_form">
    <div className="login-form-head">
      <h4>Sign up</h4>
      <p>Hello there, Sign up and Join with Us</p>
    </div>
    <div className="login-form-body">
      <div className="form-gp">
        <label htmlFor="exampleInputName1">Full Name</label>
        <input id="exampleInputName1" type="text" />
        <i className="ti-user" />
        <div className="text-danger" />
      </div>
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
      <div className="form-gp">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input id="exampleInputPassword2" type="password" />
        <i className="ti-lock" />
        <div className="text-danger" />
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

export default RegisterForm;
