import React from 'react';
import NoteBookItem from '../../components/items/NoteBookItem';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

const NoteBooks: React.FC<WithSessionProps> = ({ notebooks }) => {
  return (
    <div className="main-content-inner" id="notebook_main">
      {/* <!-- accroding start --> */}
      <div className="mt-5 w-100">
        {/* <!-- accordion style 2 start --> */}
        <div className="col-lg-8 mt-5 ml-auto mr-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">NoteBooks</h4>
              <div className="according gradiant-bg" id="accordion2">
                {notebooks.length === 0 && (
                  <h2 className="text-center"> No notebooks yet!</h2>
                )}
                {notebooks.map((note) => (
                  <NoteBookItem key={note._id} note={note} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- accordion style 2 end --> */}
      </div>
      {/* <!-- accroding end --> */}
    </div>
  );
};

export default withSession(NoteBooks);
