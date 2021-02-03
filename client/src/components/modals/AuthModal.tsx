import React, { useEffect, useState } from 'react';
import { listen, OPEN_LOGIN_MODAL, stopListen } from '../../utils/event.manager';
import { useQueryString } from '../../utils/useQueryString';
import LoginForm from '../forms/Auth/LoginForm';
import PassResetForm from '../forms/Auth/PassResetForm';
import BaseModal from './BaseModal';

const AuthModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState<'login'|'reset'>('login');
  const { token } = useQueryString();

  useEffect(() => {
    listen(OPEN_LOGIN_MODAL, () => {
      setSection('login');
      setShow(true);
    });

    if (token) {
      setSection('reset');
      setShow(true);
    }

    return () => {
      stopListen(OPEN_LOGIN_MODAL, () => {});
    };
  }, [token]);
  return (
    <BaseModal
      isOpen={show}
      centered
      onClosed={() => setShow(false)}
    >
      {section === 'login' ? <LoginForm resetPass={() => setSection('reset')} /> : <PassResetForm login={() => setSection('login')} token={token} />}
    </BaseModal>
  );
};

export default AuthModal;
