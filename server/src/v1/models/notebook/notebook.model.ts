import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface INoteBook extends Document {
  crtBy /* CREATED_BY */: Types.ObjectId|string,
  scd /* STATUS_CODE */: string,
  ttle /* Title */: string,
  desc /* Description */: string,
  lstUpdt /* Last Update */: string,
  cntr /* COUNTER */: {
    todo: number,
    mber: number,
  }
}

const NoteBookSchema:Schema<INoteBook> = new Schema({
  crtBy /* CREATED_BY */: { type: Types.ObjectId, ref: MODEL.USER},
  scd /* STATUS_CODE */: { type: String },
  ttle /* Title */: { type: String },
  desc /* Description */: { type: String },
  lstUpdt /* Last Update */: { type: String },
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
