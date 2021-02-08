import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface INoteBookMember extends Document {
  nbk: string|Types.ObjectId,
  user: string|Types.ObjectId,
}

const NoteBookSchema:Schema<INoteBookMember> = new Schema({
  nbk: { type: Types.ObjectId, ref: MODEL.NOTE_BOOK},
  user: { type: Types.ObjectId, ref: MODEL.USER },
  scd /* Mebership_Status */: { type: String },
  chng: [{
    dt /* DATE */: { type: Date },
    scd: { type: String }
  }]
}, {
  versionKey: false,
  collection: MODEL.NOTE_BOOK
});

// Export NoteBook
export const NoteBookMember = model<INoteBookMember>(MODEL.NOTE_BOOK, NoteBookSchema);
