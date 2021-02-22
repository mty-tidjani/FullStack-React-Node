import React, { useEffect, useState } from 'react';
import withSession, { WithSessionProps } from '../../Hocs/with.session';

interface CreateNoteProps extends WithSessionProps {
  onDone: () => void;
}
const CreateNote: React.FC<CreateNoteProps> = ({
  addNote,
  addNoteLodx,
  onDone,
  resetLoaders,
}) => {
  const [state, setState] = useState({ ttle: '', desc: '' });

  useEffect(() => {
    if (addNoteLodx !== '0') resetLoaders();
    if (addNoteLodx === '1') onDone();
  }, [addNoteLodx]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(state.ttle, state.desc);
  };

  const { desc, ttle } = state;

  return (
    <div className="col-12 mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title">Add Project</h4>
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="esghrtd">Note title</label>
              <input
                aria-describedby="emailHelp"
                className="form-control"
                id="esghrtd"
                placeholder="Note title"
                type="text"
                value={ttle}
                onChange={(e) => {
                  const { value } = e.target;
                  setState({ ...state, ttle: value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sadasd">Description</label>
              <textarea
                className="form-control"
                id="sadasd"
                placeholder="Description"
                value={desc}
                onChange={(e) => {
                  const { value } = e.target;
                  setState({ ...state, desc: value });
                }}
              />
            </div>
            <button
              className="btn btn-primary mt-4 pr-4 pl-4"
              disabled={!ttle.trim() || !desc.trim()}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withSession(CreateNote);
