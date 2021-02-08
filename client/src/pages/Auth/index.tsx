/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
import RegisterForm from '../../components/forms/Auth/RegisterForm';
import AuthModal from '../../components/modals/AuthModal';

const Auth: React.FC = () => {
  return (
    <div className="login-area login-bg" id="auth_main">
      <AuthModal />
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-4 offset-xl-8 col-lg-6 offset-lg-6">
            <div className="login-box-s2 ptb--100">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
