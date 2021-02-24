import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseModal from '../../components/modals/BaseModal';
import ProjectBody from './Body';
import './index.scss';

const TodoModal: React.FC = () => {
  const history = useHistory();
  return (
    <BaseModal
      className="modal_full_page"
      fade={false}
      isOpen
      onClosed={() => history.goBack()}
    >
      <ProjectBody />
    </BaseModal>
  );
};

export default TodoModal;
