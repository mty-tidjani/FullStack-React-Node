/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';

const Auth: React.FC = () => {
  return (
    <div className="login-area login-bg" id="auth_main">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-4 offset-xl-8 col-lg-6 offset-lg-6">
            <div className="login-box-s2 ptb--100">
              <form>
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
                    <div className="login-other row mt-4">
                      <div className="col-6">
                        <a className="fb-login" href="?">
                          Sign up with
                          <i className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="google-login" href="?">
                          Sign up with
                          <i className="fa fa-google" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-footer text-center mt-5">
                    <p className="text-muted">
                      Dont have an account?
                      <a href="login.html">Sign in</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
