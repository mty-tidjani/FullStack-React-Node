/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

type PassResetFormProps = {
  token: string|undefined
}

const PassResetForm:React.FC<PassResetFormProps> = ({ token }) => {
  useEffect(() => {
    if (token) {
    // Todo request the backend to verify token
    }
  }, [token]);
  return (
    <div id="pass_reset">
      <form>
        <div className="login-form-head">
          <h4>Password Reset</h4>
          <p>Forgot your password? Don&#39;t worry it happen to the best of us.</p>
        </div>
        <div className="login-form-body">
          <div className="form-gp">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input id="exampleInputEmail1" type="email" />
            <i className="ti-email" />
            <div className="text-danger" />
          </div>
          <div className="submit-btn-area">
            <button id="form_submit" type="submit">
              Recover my account
              <i className="ti-arrow-right" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default PassResetForm;
