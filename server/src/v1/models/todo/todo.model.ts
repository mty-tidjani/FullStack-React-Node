import { Schema, model, Document, Types } from "mongoose";
import { MODEL } from "../../constant";

export interface ITodo extends Document {
  nm: string,
}

const TodoSchema:Schema<ITodo> = new Schema({
  crtBy /* CREATED_BY */: { type: Types.ObjectId, ref: MODEL.USER},
  nbk /* NOTE_BOOK */: { type: Types.ObjectId, ref: MODEL.NOTE_BOOK},
  scd /* STATUS_CODE */: { type: String },
  nm /* NAME */: { type: String },
  desc /* DESCRIPTION */: {type: String }
}, {
  versionKey: false,
  collection: MODEL.TODO
});

// Export Todo
export const Todo = model<ITodo>(MODEL.TODO, TodoSchema);
