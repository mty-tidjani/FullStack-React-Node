import React, { useState } from 'react';
import Lnk from '../common/Lnk';
import CreateTodo from '../forms/CreateTodo';
import BaseModal from './BaseModal';

const AddTodoModal: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Lnk className="add_todo" onClick={() => setShow(true)}>
        Add Todo
      </Lnk>
      <BaseModal
        className="add_p_modal"
        isOpen={show}
        centered
        onClosed={() => setShow(false)}
      >
        {show && <CreateTodo onDone={() => setShow(false)} />}
      </BaseModal>
    </>
  );
};

export default AddTodoModal;
