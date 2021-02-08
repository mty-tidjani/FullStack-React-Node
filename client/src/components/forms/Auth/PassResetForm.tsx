/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Lnk from '../../common/Lnk';

type PassResetFormProps = {
  token: string | undefined;
  login: () => void;
};

const PassResetForm: React.FC<PassResetFormProps> = ({ login, token }) => {
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
          <p>
            Forgot your password? Don&#39;t worry it happen to the best of us.
          </p>
        </div>
        <div className="login-form-body">
          <div className="form-gp">
            <label htmlFor="sjskds">Email address</label>
            <input id="sjskds" type="email" />
            <i className="ti-email" />
            <div className="text-danger">e</div>
          </div>
          <div className="col text-right m-2">
            <Lnk onClick={login}>Back to login!</Lnk>
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
