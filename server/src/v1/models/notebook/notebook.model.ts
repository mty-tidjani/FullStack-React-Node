import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface INoteBook extends Document {
  nm: string,
}

const NoteBookSchema:Schema<INoteBook> = new Schema({
  crtBy /* CREATED_BY */: { type: Types.ObjectId, ref: MODEL.USER},
  scd /* STATUS_CODE */: { type: String },
  nm /* NAME */: { type: String },
  cntr /* COUNTER */: {
    todo: { type: Number, default: 0 },
    mber: { type: Number, default: 0 },
  }
}, {
  versionKey: false,
  collection: MODEL.NOTE_BOOK
});

// Export NoteBook
export const NoteBook = model<INoteBook>(MODEL.NOTE_BOOK, NoteBookSchema);
