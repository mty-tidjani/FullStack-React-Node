import React, { useState } from 'react';
import Lnk from '../common/Lnk';
import CreateNote from '../forms/CreateNote';
import BaseModal from './BaseModal';

const AddProjectModal: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Lnk className="nav-link" onClick={() => setShow(true)}>
        Add Project
      </Lnk>
      <BaseModal
        className="add_p_modal"
        isOpen={show}
        centered
        onClosed={() => setShow(false)}
      >
        {show && <CreateNote onDone={() => setShow(false)} />}
      </BaseModal>
    </>
  );
};

export default AddProjectModal;
