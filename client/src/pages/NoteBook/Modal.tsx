import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseModal from '../../components/modals/BaseModal';
import NoteBookBody from './Body';
import './index.scss';

const NoteBookModal: React.FC = () => {
  const history = useHistory();
  return (
    <BaseModal
      className="modal_full_page"
      fade={false}
      isOpen
      onClosed={() => history.goBack()}
    >
      <NoteBookBody />
    </BaseModal>
  );
};

export default NoteBookModal;
