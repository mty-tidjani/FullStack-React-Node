import React from 'react';
import { NavLink } from 'reactstrap';
import { NoteBook } from '../../types/model';
import { strRandom } from '../../utils/helpers';

type NoteItemProps = {
  note: NoteBook;
};

const NoteItem: React.FC<NoteItemProps> = (props) => {
  const { note } = props;
  const id = strRandom(5);
  return (
    <div className="card note_item">
      <div className="card-header">
        <a className="card-link" data-toggle="collapse" href={`#${id}`}>
          {`${note.ttle} [members: ${note.cntr.mber} , Todos: ${note.cntr.todo}]`}
        </a>
      </div>
      <div className="collapse" data-parent={`#${id}`} id={id}>
        <div className="card-body">
          {note.desc}
          <div className="text-right">
            <NavLink className="card_link" to={`/notebook/${note._id}`}>
              View Note
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
