import React from 'react';
import { Modal, ModalBody, ModalProps } from 'reactstrap';
import './BaseModal.scss';

type IBaseModal = {
  transparent?: number;
} & ModalProps;
const BaseModal: React.FC<IBaseModal> = (props) => {
  const { children, className, onClosed, transparent: trans } = props;

  return (
    <>
      <Modal
        {...props}
        className={`modal_base ${className}${trans ? ' transparent' : ''}`}
      >
        <button className="close modal_close" type="button" onClick={onClosed}>
          <span aria-hidden="true">×</span>
        </button>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default BaseModal;
