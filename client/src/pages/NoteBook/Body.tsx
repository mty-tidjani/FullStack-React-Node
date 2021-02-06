import React from 'react';
import NBLayout from './components/NBLayout';
import Todos from './containers/Todos';

const NoteBookBody: React.FC = () => {
  return (
    <div className="main-content-inner p-0" id="notebook_main">
      <div>
        <NBLayout />
      </div>
      <div className="main">
        <div className="tittle">
          <h3 className="text-center">The holy note name here..</h3>
        </div>
        <Todos />
      </div>
    </div>
  );
};

export default NoteBookBody;
